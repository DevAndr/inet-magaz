import React, {FC, useState} from 'react';
import './styles.scss'
import Image from "next/image";
import {Product, SIZE} from "@/shared";
import {RadioGroupChip} from "@/entities/RadioGroupChip";
import {CartButton} from "@/entities/CartButton";
import {useAppSelector} from "@/app/store/hooks";
import {productInSelect} from "@/entities/Cart/model/selectors";

interface DetailsProductProps {
    product: Product
}

export const DetailsProduct: FC<DetailsProductProps> = ({product}) => {
    const foundProduct = useAppSelector(state => productInSelect(state, product?.id))
    const [size, setSize] = useState<SIZE | null>(null)



    return (
        <div className='product-details'>
            <div className="body">
                <div className="preview">
                    <Image src={product.image} alt={product.name} width={240} height={240}/>
                </div>
                <div className="details">
                    <div className="title">
                        <h1>{product.name}</h1>
                    </div>
                    <div className="description">
                        {product.description}
                    </div>
                    <div className="size">
                        <label>Size:</label>
                        <RadioGroupChip  initial={foundProduct?.size || null} values={product.sizes} onChange={(value) => {
                            setSize(value as SIZE)
                        }}/>
                    </div>
                    <div className='wrap-price'>
                        <div className="price">
                            {product.price}
                        </div>
                        <CartButton product={product} size={size }/>
                    </div>
                </div>
            </div>
        </div>
    );
}
