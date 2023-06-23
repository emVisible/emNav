import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FmModule } from './fm/fm.module';

@Module({
  imports: [FmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
