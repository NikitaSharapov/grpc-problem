import { Injectable } from '@nestjs/common';
import { Either } from '../database/proto/either';

@Injectable()
export class DatabaseRepository {
  getData(): Either {
    const data: Either = {
      either: {
        $case: 'data',
        data: {
          test_id: 1,
          test_name: 'test',
        },
      },
    };
    return data;
  }
}
