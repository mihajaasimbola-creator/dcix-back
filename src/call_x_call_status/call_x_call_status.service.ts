import { Injectable } from '@nestjs/common';
import { CreateCallXCallStatusDto } from './dto/create-call_x_call_status.dto';
import { UpdateCallXCallStatusDto } from './dto/update-call_x_call_status.dto';

@Injectable()
export class CallXCallStatusService {
  create(createCallXCallStatusDto: CreateCallXCallStatusDto) {
    return 'This action adds a new callXCallStatus';
  }

  findAll() {
    return `This action returns all callXCallStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} callXCallStatus`;
  }

  update(id: number, updateCallXCallStatusDto: UpdateCallXCallStatusDto) {
    return `This action updates a #${id} callXCallStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} callXCallStatus`;
  }
}
