/* eslint-disable */
import { util, configure } from 'protobufjs/minimal';
import * as Long from 'long';
import { NullValue } from './google/protobuf/struct';

export const protobufPackage = 'database';

export interface messageForEither {
  test_id: number;
  test_name: string;
}

export interface Either {
  either?:
    | { $case: 'empty'; empty: NullValue }
    | { $case: 'data'; data: messageForEither };
}

export const DATABASE_PACKAGE_NAME = 'database';

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
