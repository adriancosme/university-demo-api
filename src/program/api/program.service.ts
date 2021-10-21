import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Program } from "../entities/program.entity";

@Injectable()
export class ProgramService {
    constructor(@InjectRepository(Program) private programRepository: Repository<Program>){}
}