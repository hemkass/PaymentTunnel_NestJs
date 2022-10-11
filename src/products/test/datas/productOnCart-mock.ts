import { cartExample, productOnCartOutput } from './product';

export function MockedCart(service) {
  service.isCart = jest.fn((cartid) => {
    return new Promise((resolve, reject) => {
      resolve(cartExample);
    });
  });
}

export function MockedProductAlreadyOnCart(service) {
  service.isProductOnCart = jest.fn((addProductData) => {
    return new Promise((resolve, reject) => {
      let cart = JSON.parse(JSON.stringify(cartExample));

      resolve(productOnCartOutput);
    });
  });
}
