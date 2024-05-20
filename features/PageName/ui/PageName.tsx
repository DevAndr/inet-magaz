import React, {FC} from 'react';
import './styles.scss'

interface PageNameProps {
    name: string
}

export const PageName: FC<PageNameProps> = ({name}) => {
    return (
        <h1 className='page-name'>
            {name}
        </h1>
    );
}
