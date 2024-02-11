export class CreateExpenseDto {
  title: string;
  amount: number;
  date: Date;
  category: string;
  paymentMethod: string;
  frequency: string;
  paymentStatus: string;
  notes: string;
  tags: string[];
}
