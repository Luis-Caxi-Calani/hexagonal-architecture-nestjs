import { IsNotEmpty, IsNumber, IsUUID } from 'class-validator';

export class CreatePaymentHttpDto {
    
    @IsNotEmpty()
    @IsNumber()
    amount!: number;

    @IsUUID()
    @IsNotEmpty()
    customerId!: string;
}
