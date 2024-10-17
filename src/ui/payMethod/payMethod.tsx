import React from 'react'
import { GetPayMethod, SelectPayMethod, BookOrder } from '../../core/application/ports.input'

type Props = {
  getPayMethod: GetPayMethod,
  usePayMethod: SelectPayMethod,
  bookOrder: BookOrder
}

export const PayMethod = ({
  getPayMethod,
  usePayMethod,
  bookOrder
}: Props) => {
  React.useEffect(() => {
    getPayMethod()
  }, [])
  const payMethods = usePayMethod()

  const handBookOrder = (payMethod: typeof payMethods[number]) => {
    bookOrder(payMethod)
  }

  return (
    <div>
      <p>点击下单：</p>
      {
        payMethods.map((item) => (
          <button key={item.id} onClick={() => handBookOrder(item)}>
            {item.name}
          </button>
        ))
      }
    </div>
  )
}