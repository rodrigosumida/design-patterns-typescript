import { ProductCustomizationDecorator } from './product/product-customization-decorator';
import { ProductStampDecorator } from './product/product-stamp-decorator';
import { TShirt } from './product/t-shirt';

const tShirt = new TShirt();
const printedTShirt = new ProductStampDecorator(tShirt);
const printedFrontAndBackTShirt = new ProductStampDecorator(printedTShirt);
const customizedTShirt = new ProductCustomizationDecorator(tShirt);
const customizedAndPrintedFrontAndBackTShirt =
  new ProductCustomizationDecorator(printedFrontAndBackTShirt);

console.log(tShirt.getPrice(), tShirt.getName());
console.log(printedTShirt.getPrice(), printedTShirt.getName());
console.log(
  printedFrontAndBackTShirt.getPrice(),
  printedFrontAndBackTShirt.getName(),
);
console.log(customizedTShirt.getPrice(), customizedTShirt.getName());
console.log(
  customizedAndPrintedFrontAndBackTShirt.getPrice(),
  customizedAndPrintedFrontAndBackTShirt.getName(),
);
