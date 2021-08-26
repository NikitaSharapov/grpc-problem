import { Injectable } from '@nestjs/common';
import { DatabaseRepository } from './database.repository';
import { Either } from './proto/either';

@Injectable()
export class DatabaseService {
  constructor(private readonly databaseRepository: DatabaseRepository) {}

  getProblem(): Either {
    return this.databaseRepository.getData();
  }
}
