'use client'

import {FC} from "react";
import {useGetDetailsProductQuery} from "@/entities/Product/model/api/product.api";
import {DetailsProduct} from "../../../../widgets/DetailProduct";
import { Spinner } from "@nextui-org/react";

interface DetailsProductPageProps {
    params: {
        id: string
    }
}

const DetailsProductPage: FC<DetailsProductPageProps> = ({params}) => {
    const {data, isLoading} = useGetDetailsProductQuery({id: params.id})
    console.log(data)

    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            {
                isLoading ?  <Spinner /> :
                data && <DetailsProduct product={data}/>
            }
        </div>
    )
}

export default DetailsProductPage