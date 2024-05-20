import { Button } from '@nextui-org/react';
import React, {FC} from 'react';
import {FaTrash} from "react-icons/fa6";
import './styles.scss'

interface RemoveBtnProps {
    onClick: () => void
}

export const RemoveBtn: FC<RemoveBtnProps> = ({onClick}) => {
    return (
        <Button isIconOnly color="default" aria-label="Like" className='remove-btn' onClick={onClick}>
            <FaTrash />
        </Button>
    );
}
