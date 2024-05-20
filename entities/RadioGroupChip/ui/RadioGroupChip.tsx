import React, {FC, useState} from 'react';
import './styles.scss'
import {Chip} from "@nextui-org/chip";

interface RadioGroupChipProps {
    values: string[]
    initial: string | null
    onChange: (value: string) => void
}

export const RadioGroupChip: FC<RadioGroupChipProps & Partial<Exclude<HTMLDivElement, "className">>> = ({initial, values, onChange, className}) => {
    const [selected, setSelected] = useState<string | null>(initial)

    function selectedHandle(value: string) {
        onChange(value)
        setSelected(value)
    }

    return (
        <div className={`radio-group-chips ${className}`} >
            {
                values.map(e => (<Chip className='chip' color={selected === e ? 'primary' : 'default'}
                                       onClick={(event) => {
                                           event.stopPropagation()
                                           selectedHandle(e)
                                       }}>{e}</Chip>))
            }
        </div>
    );
}
