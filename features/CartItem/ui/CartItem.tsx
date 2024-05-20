import React, {FC} from 'react';
import {CartItemPosition} from "@/entities/Cart";
import './styles.scss'
import Image from "next/image";
import {RemoveBtn} from "@/entities/RemoveBtn";
import {Counter} from "@/entities/Counter";
import {useAppDispatch} from "@/app/store/hooks";
import {removeFromCart} from "@/entities/Cart/model/slice/cart.slice";

interface CartItemProps {
    item: CartItemPosition
}

export const CartItem: FC<CartItemProps> = ({item}) => {
    const dispatch = useAppDispatch()
    const {product, quantity, size} = item

    const removeHandle = () => {
        dispatch(removeFromCart({productId: product.id}))
    }

    return (
        <li className='cart-item'>
            <div className='head'>
                <Image className='img' src={product.image} alt={product.name} width={90} height={180}/>
            </div>
            <div className="body">
                <div className="title">{product.name}</div>
                <div className='params'>
                    <div className="property">
                        <label className='label'>Size</label>
                        <div className="value">
                            {size || ''}
                        </div>
                    </div>
                    <Counter initial={quantity} onDownCounter={() => {
                    }} onUpCounter={() => {
                    }}/>
                </div>
            </div>
            <div className="price">
                {product.price}
            </div>
            <div className="controls">

                <RemoveBtn onClick={removeHandle}/>
            </div>
        </li>
    );
}