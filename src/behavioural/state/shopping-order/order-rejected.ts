import { ShoppingOrder } from './shopping-order';
import { ShoppingOrderState } from './shopping-order-state';

export class OrderRejected implements ShoppingOrderState {
  private name = 'OrderRejected';

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    console.log('Pedido recusado, não é possível aprovar');
  }

  rejectPayment(): void {
    console.log('O pedido já está recusado');
  }

  waitPayment(): void {
    console.log('Pedido recusado, não é possível colocá-lo no estado pendente');
  }

  shipOrder(): void {
    console.log('Pedido recusado, não é possível enviar');
  }
}
