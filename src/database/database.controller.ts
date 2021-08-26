import { Controller } from '@nestjs/common';
import { DatabaseService } from './database.service';
import {
  DatabaseServiceController,
  DatabaseServiceControllerMethods,
} from './proto/database';
import { Either } from './proto/either';
@Controller()
@DatabaseServiceControllerMethods()
export class DatabaseController implements DatabaseServiceController {
  constructor(private readonly databaseService: DatabaseService) {}

  getProblem(): Either {
    return this.databaseService.getProblem();
  }
}
