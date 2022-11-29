import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  test(id: number) {
    return process.env.TYPEORM_TYPE;
  }
}
