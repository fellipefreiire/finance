import { Expense } from '../../domain/entities/Expense.entity';
import { CreateExpenseDto } from '../dtos/CreateExpense.dto';
import { UpdateExpenseDto } from '../dtos/UpdateExpense.dto';

export interface IExpenseService {
  createExpense(createExpenseDto: CreateExpenseDto): Promise<Expense>;
  updateExpense(
    id: string,
    updateExpenseDto: UpdateExpenseDto,
  ): Promise<Expense>;
  getExpenseById(id: string): Promise<Expense>;
  getAllExpenses(): Promise<Expense[]>;
  deleteExpense(id: string): Promise<void>;
}
