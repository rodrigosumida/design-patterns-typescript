import { deliveryContext } from './delivery/delivery-context';
import { DeliveryFactory } from './delivery/delivery-factory';

const factory = new DeliveryFactory();
deliveryContext(factory, 'Rodrigo', '20A', 'Av Brasil', 'SP');
deliveryContext(factory, 'Messi', '20A', 'Av Brasil', 'SP');
deliveryContext(factory, 'Ronaldo', '565', 'Av Brasil', 'SP');
deliveryContext(factory, 'Kelvin', '2', 'Rua A', 'SP');
deliveryContext(factory, 'Rodrigo', '20A', 'Av Brasil', 'SP');
deliveryContext(factory, 'Messi', '20A', 'Av Brasil', 'SP');
deliveryContext(factory, 'Ronaldo', '565', 'Av Brasil', 'SP');
deliveryContext(factory, 'Kelvin', '2', 'Rua A', 'SP');

console.log();
console.log(factory.getLocations());
