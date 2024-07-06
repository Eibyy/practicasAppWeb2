import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Socket } from 'socket.io';
import { Repository } from 'typeorm';
import { InscriptionDto } from './dto/inscription.dto';
import { Inscription } from './inscription.entity';

interface Usuario {
    id: string;
    nombre: string;
    activo: boolean;    
}

interface ClientesConectados {
    [id: string]: {
        socket: Socket;
        usuario: Usuario;
    }
}

const usuarios: Usuario[] = [
    {id: '1', nombre: 'Camila', activo: true},
    {id: '2', nombre: 'Andrea', activo: true}
]

@Injectable()
export class InscriptionService {
  constructor(
    @InjectRepository(Inscription)
    private readonly inscriptionRepository: Repository<Inscription>
  ) {}

  private clientesConectados: ClientesConectados = {};

  async create(data: InscriptionDto): Promise<Inscription> {
    const nuevaInscripcion = this.inscriptionRepository.create(data);
    return this.inscriptionRepository.save(nuevaInscripcion);
  }

  registrarCliente(socket: Socket, userId: string) {
    const usuario = usuarios.find(user => user.id === userId);
    if (!usuario) {
      throw new Error('Usuario no encontrado');
    }
    if (!usuario.activo) {
      throw new Error('Usuario no está activo');
    }

    this.verificarConexionUsuario(usuario);

    this.clientesConectados[socket.id] = {
      socket: socket,
      usuario: usuario
    }
  }

  eliminarCliente(clienteId: string) {
    delete this.clientesConectados[clienteId];
  }

  obtenerClientesConectados(): string[] {
    return Object.keys(this.clientesConectados);
  }

  obtenerNombreCompletoUsuario(socketId: string): string {
    return this.clientesConectados[socketId].usuario.nombre;
  }

  actualizarEstadoUsuario(usuario: Usuario) {
    const cliente = this.clientesConectados[usuario.id];
    if (cliente) {
      cliente.usuario = usuario;
    }
  }

  verificarConexionUsuario(usuario: Usuario) {
    let contadorConexiones = 0;

    for (const clienteId of Object.keys(this.clientesConectados)) {
      const clienteConectado = this.clientesConectados[clienteId];
      if (clienteConectado.usuario.id === usuario.id) {
        contadorConexiones++;
        if (contadorConexiones >= 3) {
          throw new Error('El usuario ha alcanzado el máximo de conexiones (3)');
        }
      }
    }
  }
}
