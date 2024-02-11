import {
  Controller,
  Post,
  Body,
  Inject,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ExpenseService } from '../../application/services/Expense.service';
import { CreateExpenseDto } from '../../application/dtos/CreateExpense.dto';
import { UpdateExpenseDto } from '../../application/dtos/UpdateExpense.dto';

@Controller('expenses')
export class ExpenseController {
  constructor(
    @Inject('IExpenseService') private readonly expenseService: ExpenseService,
  ) {}

  @Post()
  async create(@Body() createExpenseDto: CreateExpenseDto) {
    return this.expenseService.createExpense(createExpenseDto);
  }

  @Get()
  async findAll() {
    return this.expenseService.getAllExpenses();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.expenseService.getExpenseById(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateExpenseDto: UpdateExpenseDto,
  ) {
    return this.expenseService.updateExpense(id, updateExpenseDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.expenseService.deleteExpense(id);
  }
}
