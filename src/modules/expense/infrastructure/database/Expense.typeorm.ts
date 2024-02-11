import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Expense } from '../../domain/entities/Expense.entity';
import { IExpenseRepository } from '../../domain/repositories/Expense.repository.interface';
import { CreateExpenseDto } from '../../application/dtos/CreateExpense.dto';
import { UpdateExpenseDto } from '../../application/dtos/UpdateExpense.dto';

@Injectable()
export class ExpenseTypeORMRepository implements IExpenseRepository {
  constructor(
    @InjectRepository(Expense)
    private readonly expenseRepository: Repository<Expense>,
  ) {}

  async create(createExpenseDto: CreateExpenseDto): Promise<Expense> {
    console.log({ createExpenseDto });
    const expense = this.expenseRepository.create(createExpenseDto);
    await this.expenseRepository.save(expense);
    console.log({ expense });
    return expense;
  }

  async update(
    id: string,
    updateExpenseDto: UpdateExpenseDto,
  ): Promise<Expense> {
    let expense = await this.expenseRepository.findOneBy({
      id,
    });
    if (!expense) {
      throw new Error('Expense not found');
    }
    expense = Object.assign(expense, updateExpenseDto);
    await this.expenseRepository.save(expense);
    return expense;
  }

  async findById(id: string): Promise<Expense | null> {
    const expense = await this.expenseRepository.findOneBy({
      id,
    });
    return expense;
  }

  async findAll(): Promise<Expense[]> {
    console.log('findAll');
    return this.expenseRepository.find();
  }

  async delete(id: string): Promise<void> {
    await this.expenseRepository.delete(id);
  }
}
