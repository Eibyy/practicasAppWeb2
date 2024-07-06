import { MessageBody, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";

import {Server, Socket} from "socket.io";

@WebSocketGateway()
export class WebsocketGateway implements OnGatewayConnection, OnGatewayDisconnect{

    @WebSocketServer()
    server:Server

    handleConnection(client: Socket ){
        console.log("Cliente conectado" + client.id)
    }

    handleDisconnect(client: Socket) {
        console.log('Cliente descoenctado: ' + client.id)
    }


    @SubscribeMessage('mensaje')
    handleMessage(@MessageBody() data:any){
        console.log(data)
    }
}