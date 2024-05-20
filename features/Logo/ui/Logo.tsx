import React, {FC} from 'react';
import './styles.scss'
import Link from "next/link";
export const Logo: FC = () => {
    return (
        <Link href={'/'}>
            <div className='logo'>
                <div className='first'>LUCY IN THE SKY</div>
                <p className='last'>LOS ANGELES</p>
            </div>
        </Link>
    );
}
