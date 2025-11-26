import { Injectable } from '@nestjs/common';
import { CreateCallStatusDto } from './dto/create-call_status.dto';
import { UpdateCallStatusDto } from './dto/update-call_status.dto';

@Injectable()
export class CallStatusService {
  create(createCallStatusDto: CreateCallStatusDto) {
    return 'This action adds a new callStatus';
  }

  findAll() {
    return `This action returns all callStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} callStatus`;
  }

  update(id: number, updateCallStatusDto: UpdateCallStatusDto) {
    return `This action updates a #${id} callStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} callStatus`;
  }
}
