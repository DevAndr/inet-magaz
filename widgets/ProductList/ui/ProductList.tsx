'use client'

import React, {FC, useEffect, useState} from 'react';
import './styles.scss'
import {Pagination, Spinner} from "@nextui-org/react";
import {useGetProductMutation} from "@/entities/Product/model/api/product.api";
import CardProduct from "@/features/CardProduct/ui/CardProduct";
import {useRouter} from "next/navigation";
import {Product} from "@/shared";

export const ProductList: FC = () => {
    const router = useRouter();
    const [pagination, setPagination] = useState(1)
    const [fetchProducts, {data, isLoading,}] = useGetProductMutation()

    useEffect(() => {
        fetchProducts({page: 1})
    }, [])

    const navigatePageHandle = (page: number) => {
        console.log(page)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        fetchProducts({page}).then(resp => {

        })
    }

    const clickToProductHandle = (product: Product) => {
        console.log(product)
        router.push(`/details-page/${product.id}`)
    }

    return (
        <div className='wrap-list'>
            {
                isLoading ? <Spinner/> :
                data && <>
                    <ul className="product-list">
                        {
                            data.data.map(product => (
                                <li key={product.id} data-id={product.id} >
                                    <CardProduct product={product} onClick={() => clickToProductHandle(product)}/>
                                </li>
                            ))
                        }
                    </ul>
                    <Pagination total={data.total} initialPage={data.page} onChange={navigatePageHandle}/>
                </>
            }
        </div>
    );
}
