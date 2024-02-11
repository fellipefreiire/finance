import { Injectable } from '@nestjs/common';
import { IExpenseService } from '../interfaces/Expense.service.interface';
import { CreateExpenseDto } from '../dtos/CreateExpense.dto';
import { UpdateExpenseDto } from '../dtos/UpdateExpense.dto';
import { Expense } from '../../domain/entities/Expense.entity';
import { IExpenseRepository } from '../../domain/repositories/Expense.repository.interface';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ExpenseService implements IExpenseService {
  constructor(
    @InjectRepository(Expense)
    private readonly expenseRepository: IExpenseRepository,
  ) {}

  async createExpense(createExpenseDto: CreateExpenseDto): Promise<Expense> {
    return this.expenseRepository.create(createExpenseDto);
  }

  async updateExpense(
    id: string,
    updateExpenseDto: UpdateExpenseDto,
  ): Promise<Expense> {
    return this.expenseRepository.update(id, updateExpenseDto);
  }

  async getExpenseById(id: string): Promise<Expense> {
    return this.expenseRepository.findById(id);
  }

  async getAllExpenses(): Promise<Expense[]> {
    console.log('getAllExpenses');
    console.log({ expenseRepository: this.expenseRepository });
    return this.expenseRepository.findAll();
  }

  async deleteExpense(id: string): Promise<void> {
    return this.expenseRepository.delete(id);
  }
}
