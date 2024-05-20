'use client'

import React, {FC} from 'react';
import {useAppSelector} from "@/app/store/hooks";
import {CartItem} from "@/features/CartItem";
import './styles.scss'
import {Button, useDisclosure} from "@nextui-org/react";
import {ConfirmOrderDialog} from "@/features/ConfirmOrderDialog";

interface CartProps {

}

export const Cart: FC<CartProps> = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {total, products: cartItems} = useAppSelector(state => state.cartReducer)

    const confirmHandle = () => {
        onOpen()
    }

    return (
        <div className='cart'>
            <ul className='items'>
                {
                    cartItems.map(item => <CartItem key={item.product.id} item={item}/>)
                }
            </ul>
            <div className='total'>
                <div className='amount'>
                    <label className='label'>Total: </label>
                    <span className='value'>${total}</span>
                </div>
                <Button color='primary' onClick={confirmHandle}>Confirm</Button>
            </div>
            <ConfirmOrderDialog cartItems={cartItems} isOpen={isOpen} onChange={onOpenChange}/>
        </div>
    );
}
