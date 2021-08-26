import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { ClientFactory } from 'utils';
import { RestController } from './rest.controller';
import { RestService } from './rest.service';

@Module({
  imports: [ClientsModule.register(ClientFactory.createMany(['database']))],
  controllers: [RestController],
  providers: [RestService],
})
export class RestModule {}
