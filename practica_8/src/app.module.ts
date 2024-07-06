import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inscription } from './websockets/inscription.entity';
import { WebsocketGateway } from './websockets/websocket.gateway';
import { InscriptionService } from './websockets/inscription.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'practica8',
      entities: [Inscription],
      synchronize: true, 
    }),
    TypeOrmModule.forFeature([Inscription]),
  ],
  controllers: [],
  providers: [ WebsocketGateway, InscriptionService],
})
export class AppModule {}
