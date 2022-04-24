import { CreateBillInput } from './create-bill.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateBillInput extends PartialType(CreateBillInput) {
  id: number;
}
