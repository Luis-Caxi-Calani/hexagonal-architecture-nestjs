import { Controller } from "@nestjs/common";
import { CreatePaymentHttpDto } from "./create-payment.http-dto";
import { CreatePaymentUseCase } from "src/contexts/payments/application/create-payment-use-case/create-payment-use-case";



@Controller('payments')
export class CreatePaymentController {
    constructor (private createPaymentUseCase: CreatePaymentUseCase) {}

}