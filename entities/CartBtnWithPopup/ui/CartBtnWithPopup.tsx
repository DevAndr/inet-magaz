import React, {FC, useState} from 'react';
import {Button, Popover, PopoverContent, PopoverTrigger} from "@nextui-org/react";
import {Product, SIZE} from '@/shared';
import {CartButton, StateButtonCart} from "@/entities/CartButton";
import {RadioGroupChip} from "@/entities/RadioGroupChip";
import {useAppDispatch, useAppSelector} from "@/app/store/hooks";
import {productInSelect} from "@/entities/Cart/model/selectors";
import {useRouter} from "next/navigation";
import {addToCartProductAndSize} from "@/entities/Cart/model/slice/cart.slice";

interface CartBtnWithPopupProps {
    product: Product
}

export const CartBtnWithPopup: FC<CartBtnWithPopupProps> = ({product}) => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const [isOpen, setIsOpen] = React.useState(false);
    const [size, setSize] = useState<SIZE | null>(null)
    const [stateBtn, setStateBtn] = useState<StateButtonCart>('ADD_TO_CART')
    const foundProduct = useAppSelector(state => productInSelect(state, product?.id))

    const btnHandle = () => {
        if (stateBtn === 'IN_CART')
            router.push('/cart')
        else {
            setIsOpen(true)
        }
    }

    const changeRadioGroupHandle = (value: string) => {
        const sizeLocal = value as SIZE
        dispatch(addToCartProductAndSize({product, size: sizeLocal}))
        setSize(sizeLocal)
        setTimeout(() => {
            setIsOpen(false)
            setStateBtn('IN_CART')
        }, 350)
    }

    return (
        <Popover placement="bottom" showArrow offset={10} isOpen={isOpen}>
            <PopoverTrigger>
                <Button onClick={btnHandle} color={stateBtn === 'ADD_TO_CART' ? 'primary' : 'default'}>{
                    stateBtn === 'IN_CART' ? 'In cart' : 'Add to cart'
                }</Button>
            </PopoverTrigger>
            <PopoverContent className="w-[240px]">
                {(titleProps) => (
                    <div className="px-1 py-2 w-full">
                        <p className="text-small font-bold text-foreground" {...titleProps}>
                            Select size
                        </p>
                        <div className="mt-2 flex flex-col gap-2 w-full">
                            <RadioGroupChip initial={foundProduct?.size || null} values={product.sizes}
                                            onChange={changeRadioGroupHandle}/>
                        </div>
                    </div>
                )}
            </PopoverContent>
        </Popover>
    );
}
