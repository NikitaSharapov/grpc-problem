/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { util, configure } from 'protobufjs/minimal';
import * as Long from 'long';
import { Observable } from 'rxjs';
import { Either } from './either';
import { Empty } from './google/protobuf/empty';

export const protobufPackage = 'database';

export const DATABASE_PACKAGE_NAME = 'database';

export interface DatabaseServiceClient {
  getProblem(request: Empty): Observable<Either>;
}

export interface DatabaseServiceController {
  getProblem(request: Empty): Promise<Either> | Observable<Either> | Either;
}

export function DatabaseServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ['getProblem'];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcMethod('DatabaseService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcStreamMethod('DatabaseService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const DATABASE_SERVICE_NAME = 'DatabaseService';

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
