import React, {FC, useState} from 'react';
import {Button} from "@nextui-org/react";
import './styles.scss'
import {FaMinus, FaPlus} from "react-icons/fa6";

interface CounterProps {
    initial: number
    onUpCounter: () => void
    onDownCounter: () => void
}

export const Counter: FC<CounterProps> = ({initial, onDownCounter, onUpCounter}) => {
    const [count, setCount] = useState(initial)

    const downHandle = () => {
        onDownCounter()
    }

    const upHandle = () => {
        onUpCounter()
    }

    return (
        <div className='counter'>
            <Button isIconOnly onClick={downHandle}><FaMinus/></Button>
            <span>{count}</span>
            <Button isIconOnly onClick={upHandle}><FaPlus/></Button>
        </div>
    );
}
