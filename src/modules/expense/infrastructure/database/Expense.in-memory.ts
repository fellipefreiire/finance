import { CreateExpenseDto } from '../../application/dtos/CreateExpense.dto';
import { UpdateExpenseDto } from '../../application/dtos/UpdateExpense.dto';
import { Expense } from '../../domain/entities/Expense.entity';
import { IExpenseRepository } from '../../domain/repositories/Expense.repository.interface';

export class ExpenseInMemoryRepository implements IExpenseRepository {
  private expenses: Expense[] = [];

  async create(createExpenseDto: CreateExpenseDto): Promise<Expense> {
    console.log({ createExpenseDto });
    const expense: Expense = {
      id: this.generateUuid(),
      ...createExpenseDto,
      date: new Date(createExpenseDto.date), // Garante que a data é um objeto Date
    };

    this.expenses.push(expense);
    return expense;
  }

  async update(
    id: string,
    updateExpenseDto: UpdateExpenseDto,
  ): Promise<Expense> {
    const index = this.expenses.findIndex((expense) => expense.id === id);
    if (index === -1) {
      throw new Error('Expense not found');
    }

    // Atualiza apenas os campos fornecidos
    this.expenses[index] = { ...this.expenses[index], ...updateExpenseDto };
    return this.expenses[index];
  }

  async findById(id: string): Promise<Expense | null> {
    const expense = this.expenses.find((expense) => expense.id === id);
    return expense || null;
  }

  async findAll(): Promise<Expense[]> {
    return this.expenses;
  }

  async delete(id: string): Promise<void> {
    this.expenses = this.expenses.filter((expense) => expense.id !== id);
  }

  private generateUuid(): string {
    // Implementação simples de um gerador de UUID para fins de exemplo
    // Em um cenário real, considere usar uma biblioteca como uuid
    return 'xxxx-xxxx-4xxx-yxxx-xxxx-xxxx'.replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0,
        v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  // Implemente outros métodos conforme necessário, seguindo a interface
}
