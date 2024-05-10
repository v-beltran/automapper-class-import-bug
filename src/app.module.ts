import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestProfile } from './mappers/test.profile';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';

@Module({
  imports: [
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),
  ],
  controllers: [AppController],
  providers: [AppService, TestProfile],
})
export class AppModule {}
