import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  test() {
    return process.env.TYPEORM_TYPE;
  }
}
