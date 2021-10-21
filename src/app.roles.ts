import { RolesBuilder } from 'nest-access-control';

export enum AppRoles {
  ADMIN = 'ADMIN',
  CASHIER = 'CASHIER',
}

export enum AppResource {
  USER = 'USER',
  REPORT = 'REPORT',
}

export const roles: RolesBuilder = new RolesBuilder();

roles
  // CASHIER ROLES
  .grant(AppRoles.CASHIER)
  .readOwn([AppResource.REPORT])
  // ADMIN ROLES
  .grant(AppRoles.ADMIN)
  .createAny([AppResource.USER])
  .updateAny([AppResource.USER])
  .deleteAny([AppResource.USER])
  .readAny([AppResource.USER, AppResource.REPORT]);
