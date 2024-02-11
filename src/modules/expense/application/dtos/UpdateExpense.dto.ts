import { PartialType } from '@nestjs/mapped-types';
import { CreateExpenseDto } from './CreateExpense.dto';

export class UpdateExpenseDto extends PartialType(CreateExpenseDto) {}
