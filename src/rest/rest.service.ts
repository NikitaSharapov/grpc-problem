import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { DatabaseServiceClient } from 'database/proto/database';

@Injectable()
export class RestService {
  constructor(@Inject('database') private readonly client: ClientGrpc) {}

  databaseServiceClient: DatabaseServiceClient;

  onModuleInit() {
    this.databaseServiceClient =
      this.client.getService<DatabaseServiceClient>('DatabaseService');
  }

  getProblem() {
    return this.databaseServiceClient.getProblem({});
  }
}
