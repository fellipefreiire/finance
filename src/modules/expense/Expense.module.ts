import { Module } from '@nestjs/common';
import { ExpenseService } from './application/services/Expense.service';
import { ExpenseController } from './infrastructure/controllers/Expense.controller';
import { ExpenseTypeORMRepository } from './infrastructure/database/Expense.typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Expense } from './domain/entities/Expense.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Expense])],
  controllers: [ExpenseController],
  providers: [
    {
      provide: 'IExpenseService',
      useClass: ExpenseService,
    },
    {
      provide: 'IExpenseRepository',
      useClass: ExpenseTypeORMRepository,
    },
  ],
  // exports: ['IExpenseRepository'],
})
export class ExpenseModule {}

// @Module({
//   imports: [TypeOrmModule.forFeature([Expense])],
//   controllers: [ExpenseController],
//   providers: [
//     ExpenseService,
//     {
//       provide: 'IExpenseRepository',
//       useFactory: (
//         expenseRepository: Repository<Expense>,
//       ): IExpenseRepository => {
//         console.log({ NODE_ENV: process.env.NODE_ENV });
//         if (process.env.NODE_ENV === 'development') {
//           return new ExpenseInMemoryRepository();
//         }
//         return new ExpenseTypeORMRepository(expenseRepository);
//       },
//       inject: [getRepositoryToken(Expense)],
//     },
//   ],
//   exports: ['IExpenseRepository'],
// })
// export class ExpenseModule {}

// @Module({
//   imports: [TypeOrmModule.forFeature([Expense])],
//   controllers: [ExpenseController],
//   providers: [
//     ExpenseService,
//     {
//       provide: 'IExpenseRepository',
//       useClass:
//         process.env.NODE_ENV === 'production'
//           ? ExpenseTypeORMRepository
//           : ExpenseInMemoryRepository,
//     },
//   ],
//   // exports: ['IExpenseRepository'],
// })
// export class ExpenseModule {}
