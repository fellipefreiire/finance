import { Module } from '@nestjs/common';
import { ExpenseModule } from './modules/expense/Expense.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: parseInt(process.env.DB_PORT) || 5432,
      username: 'postgres',
      password: 'postgres',
      // database: process.env.DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize:
        process.env.NODE_ENV === 'development'
          ? process.env.TYPEORM_SYNC === 'true'
          : false,
    }),
    ExpenseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  // static getEnvironmentBasedImports() {
  //   console.log({ NODE_ENV: process.env.NODE_ENV });
  //   if (process.env.NODE_ENV === 'production') {
  //     return [
  //       TypeOrmModule.forRoot({
  //         type: 'postgres',
  //         host: process.env.DB_HOST,
  //         port: parseInt(process.env.DB_PORT) || 5432,
  //         username: process.env.USERNAME,
  //         password: process.env.PASSWORD,
  //         database: process.env.DB_NAME,
  //         entities: [__dirname + '/**/*.entity{.ts,.js}'],
  //         synchronize: false,
  //         // synchronize:
  //         //   process.env.NODE_ENV === 'development'
  //         //     ? process.env.TYPEORM_SYNC === 'true'
  //         //     : false,
  //       }),
  //       ExpenseModule,
  //     ];
  //   } else {
  //     return [ExpenseModule];
  //   }
  // }
}
