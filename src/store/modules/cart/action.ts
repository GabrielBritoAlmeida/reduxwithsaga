import { IProduct } from './types'

export function addProductToCartRequest(product: IProduct) {
  return {
    type: 'ADD_PRODUCT_TO_CART',
    payload: {
      product
    }
  }
}

export function addProductToCartSuccess(product: IProduct) {
  return {
    type: 'ADD_PRODUCT_TO_CART',
    payload: {
      product
    }
  }
}

export function addProductToCartFailure(product: IProduct) {
  return {
    type: 'ADD_PRODUCT_TO_CART',
    payload: {
      product
    }
  }
}
