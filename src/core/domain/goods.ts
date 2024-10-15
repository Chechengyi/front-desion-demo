export type Goods = {
  id: UniqueId;
  name: string;
  price: PriceCent;
}

export function totalPrice(goods: Goods[]): Number {
  return goods.reduce((total, item) => total + item.price, 0)
}