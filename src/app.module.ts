import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { RestModule } from './rest/rest.module';

@Module({
  imports: [RestModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
