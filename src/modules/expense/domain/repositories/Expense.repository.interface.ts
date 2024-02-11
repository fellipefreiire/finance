import { Expense } from '../entities/Expense.entity';
import { CreateExpenseDto } from '../../application/dtos/CreateExpense.dto';
import { UpdateExpenseDto } from '../../application/dtos/UpdateExpense.dto';

export interface IExpenseRepository {
  create(createExpenseDto: CreateExpenseDto): Promise<Expense>;
  update(id: string, updateExpenseDto: UpdateExpenseDto): Promise<Expense>;
  findById(id: string): Promise<Expense | undefined>;
  findAll(): Promise<Expense[]>;
  delete(id: string): Promise<void>;
}
