import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { ClientFactory } from 'utils';
import { DatabaseController } from './database.controller';
import { DatabaseRepository } from './database.repository';
import { DatabaseService } from './database.service';

@Module({
  imports: [ClientsModule.register(ClientFactory.createMany(['database']))],
  controllers: [DatabaseController],
  providers: [DatabaseService, DatabaseRepository],
})
export class DatabaseModule {}
