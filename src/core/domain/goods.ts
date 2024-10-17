export type Goods = {
  id: UniqueId;
  name: string;
  price: PriceCent;
}

export function totalPrice(goods: Goods[]): number {
  return goods.reduce((total, item) => total + item.price, 0)
}