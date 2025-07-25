export class PaymentNotFoundException extends Error {
    constructor(public readonly Id: string) {
        super(`Payment with ID ${Id} not found.`);
    }
}