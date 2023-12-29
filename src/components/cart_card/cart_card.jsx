import React from 'react'
import { CardRightSide, CartCardBtns, CartCardContent, CartCardText } from './styles'

export const CartCard = () => {
  return (
    <CartCardContent>
          <img src="https://via.placeholder.com/130" alt="" />
        <CardRightSide>
          <CartCardText>
            <h2>Kilo de Felicidad</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing? aaaaaaaaaaaaaaaaaaaaa</p>
          </CartCardText>
          <CartCardBtns>
            <button>+</button>
            <span>0</span>
            <button>-</button>
          </CartCardBtns>
        </CardRightSide>
      </CartCardContent>
  )
}
