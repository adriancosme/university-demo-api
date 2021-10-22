import { Controller, Get } from '@nestjs/common';
import { ProgramService } from './program.service';

@Controller('program')
export class ProgramController {
  constructor(private programService: ProgramService) {}
  @Get('get-programs')
  async getPrograms() {
    return this.programService.getPrograms();
  }
}
