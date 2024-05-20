import React, {FC, useState} from 'react';
import {Button, Card, CardBody, CardFooter, CardHeader} from '@nextui-org/react';
import Image from "next/image";
import {Product} from "@/shared";
import './styles.scss'
import {CartButton} from "@/entities/CartButton";
import {CartBtnWithPopup} from "@/entities/CartBtnWithPopup";
import {RadioGroupChip} from "@/entities/RadioGroupChip";

interface CardProductProps {
    product: Product
    onClick: () => void
}

const CardProduct: FC<CardProductProps> = ({product, onClick}) => {
    const [showFooterParams, setShowFooterParams] = useState(false)


    return (
        <Card className="product-card" isPressable onClick={onClick}>
            <CardHeader className="head">
                <Image
                    alt={product.name}
                    className="img"
                    src={product.image}
                    width={516}
                    height={668}
                />
            </CardHeader>
            <CardBody className="body">
                <h4 className="font-bold text-large">{product.name}</h4>
            </CardBody>
            <CardFooter className='footer'>
                <div className="wrap-price">
                    <div className="price">{product.price}</div>
                    <CartBtnWithPopup product={product}/>
                </div> 
            </CardFooter>
        </Card>
    );
}

export default CardProduct;