import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AspiranteModule } from './aspirante/aspirante.module';
import { CursoModule } from './curso/curso.module';
import { InscripcionModule } from './inscripcion/inscripcion.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [AspiranteModule, CursoModule, InscripcionModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'WEBC',
      synchronize: true,
      autoLoadEntities:true
    }),
  ],



  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}