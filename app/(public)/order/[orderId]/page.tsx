import React, {FC} from 'react';
import './styles.scss'

interface PageProps {
    params: {
        orderId: string
    }
}

const Page: FC<PageProps> = ({params}) => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="order">
                <h1 className='title'>Thank you for order!</h1>
                <div className='flex gap-2'>
                    <div>You're number order:</div>
                    <div className='order-number'>
                        {
                            params.orderId
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
