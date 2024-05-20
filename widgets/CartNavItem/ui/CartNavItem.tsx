'use client'

import {Badge} from '@nextui-org/react';
import React, {FC} from 'react';
import {FaCartShopping} from "react-icons/fa6";
import {useAppSelector} from "@/app/store/hooks";
import {countItemsInCartSelect} from "@/entities/Cart/model/selectors";

interface CartCounterProps {

}

export const CartNavItem: FC<CartCounterProps> = () => {
    const countInCart = useAppSelector(countItemsInCartSelect)

    console.log(countInCart)

    return (
        <div>
            <Badge content={countInCart} isInvisible={countInCart === 0} color="primary">
                <div className='flex gap-2 items-center'>
                    <span>Cart</span> <FaCartShopping/>
                </div>
            </Badge>
        </div>
    );
}