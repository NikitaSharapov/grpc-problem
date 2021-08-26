import { GrpcOptions, Transport } from '@nestjs/microservices';
import { resolve } from 'path';
import { ClientProviderOptions } from '@nestjs/microservices/module/interfaces/clients-module.interface';
import { DATABASE_PACKAGE_NAME } from '../database/proto/database';

export const DatabaseRpcServer: GrpcOptions = {
  transport: Transport.GRPC,
  options: {
    url: 'localhost:50051',
    package: DATABASE_PACKAGE_NAME,
    protoPath: resolve(__dirname, '../database/proto/database.proto'),
    loader: {
      includeDirs: [resolve(__dirname, '../database/proto')],
      arrays: true,
    },
  },
};

export const DatabaseRpcClient: ClientProviderOptions = {
  name: DATABASE_PACKAGE_NAME,
  transport: Transport.GRPC,
  options: {
    url: 'localhost:50051',
    package: DATABASE_PACKAGE_NAME,
    protoPath: resolve(__dirname, '../database/proto/database.proto'),
    loader: {
      includeDirs: [resolve(__dirname, '../database/proto')],
      arrays: true,
    },
  },
};

export class ServerFactory {
  static create(serviceName: string): GrpcOptions {
    switch (serviceName) {
      case 'database':
        return DatabaseRpcServer;
    }
  }

  static createMany(serviceNames: string[]): GrpcOptions[] {
    return serviceNames.map((name) => ServerFactory.create(name));
  }
}

export class ClientFactory {
  static create(serviceName: string): ClientProviderOptions {
    switch (serviceName) {
      case 'database':
        return DatabaseRpcClient;
      default:
        return null;
    }
  }

  static createMany(serviceNames: string[]): ClientProviderOptions[] {
    return serviceNames.map((name) => ClientFactory.create(name));
  }
}
