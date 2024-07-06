import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { InscriptionService } from './inscription.service';
import { Server, Socket } from 'socket.io';
import { InscriptionDto } from './dto/inscription.dto';

@WebSocketGateway({ cors: true })
export class WebsocketGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer()
  wss: Server;

  constructor(private readonly inscripcionService: InscriptionService) {}

  async handleConnection(client: Socket, ...args: any[]) {
    const token = client.handshake.headers.authorization as string;
    try {
      await this.inscripcionService.registrarCliente(client, token);
    } catch (error) {
      client.disconnect();
      return;
    }
    this.wss.emit('clientes-actualizados', this.inscripcionService.obtenerClientesConectados());
  }

  handleDisconnect(client: Socket) {
    this.inscripcionService.eliminarCliente(client.id);
    this.wss.emit('clientes-actualizados', this.inscripcionService.obtenerClientesConectados());
  }

  @SubscribeMessage('mensaje-desde-cliente')
  async onMessageFromClient(client: Socket, payload: InscriptionDto): Promise<void> {
    const inscripcion = await this.inscripcionService.create(payload);
    this.wss.emit('mensaje-desde-servidor', {
      nombreCompleto: this.inscripcionService.obtenerNombreCompletoUsuario(client.id),
      mensaje: inscripcion,
    });
  }
}
