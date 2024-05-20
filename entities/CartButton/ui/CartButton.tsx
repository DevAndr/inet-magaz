import React, {FC, useEffect, useState} from 'react';
import {Button} from "@nextui-org/react";
import {Product, SIZE} from "@/shared";
import {useAppDispatch, useAppSelector} from "@/app/store/hooks";
import {addToCartProduct, addToCartProductAndSize} from "@/entities/Cart/model/slice/cart.slice";
import {productInSelect} from "@/entities/Cart/model/selectors";
import {useRouter} from "next/navigation";

interface CartButtonProps {
    product: Product
    size: SIZE | null
}

export type StateButtonCart = 'IN_CART' | 'ADD_TO_CART'

export const CartButton: FC<CartButtonProps> = ({product, size}) => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const foundProduct = useAppSelector(state => productInSelect(state, product?.id))
    const [state, setState] = useState<StateButtonCart>('ADD_TO_CART')

    console.log({product, size})

    useEffect(() => {
        if (foundProduct) {
            setState('IN_CART')
        }
    }, [foundProduct])

    const addToCart = () => {
        if (state === 'ADD_TO_CART') {
            if (size) {
                dispatch(addToCartProductAndSize({product, size}))
                setState('IN_CART')
            }
        } else {
            router.push('/cart')
        }
    }

    return (
        <Button onClick={addToCart} color={state === 'ADD_TO_CART' ? 'primary' : 'default'}>
            {
                state === 'ADD_TO_CART' ? 'Add to cart' : 'In cart'
            }
        </Button>
    );
}
