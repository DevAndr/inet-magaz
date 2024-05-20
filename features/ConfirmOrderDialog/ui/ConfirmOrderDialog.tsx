import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from '@nextui-org/react';
import React, {FC} from 'react';
import {useCreateOrderMutation} from "@/entities/Order/api/order.api";
import {CartItemPosition} from '@/entities/Cart';
import {useRouter} from "next/navigation";

interface ConfirmOrderDialogProps {
    isOpen: boolean
    cartItems: CartItemPosition[]
    onChange: (value: boolean) => void
}

export const ConfirmOrderDialog: FC<ConfirmOrderDialogProps> = ({isOpen, onChange, cartItems}) => {
    const router = useRouter()
    const [createOrderFetch, {data, isLoading, isSuccess}] = useCreateOrderMutation()
    const acceptOrderHandle = () => {
        if (cartItems.length) {
            const products = cartItems.map(item => ({id: item.product.id, size: item.size}))
            createOrderFetch({products}).then(resp => {
                if (resp.data) {
                    setTimeout(() => {
                        router.push(`/order/${resp.data.orderId}`)
                    }, 0)
                }
            })
        }
    }

    return (
        <Modal isOpen={isOpen} onOpenChange={onChange}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">Confirm order</ModalHeader>
                        <ModalBody>
                            {data && <p>Thank you!</p>}
                        </ModalBody>
                        <ModalFooter>
                            {
                                isSuccess ? <Button color='success'>Done!</Button> :
                                    <>
                                        <Button color="danger" variant="light" onPress={onClose}>
                                            No
                                        </Button>
                                        <Button color="primary" onPress={acceptOrderHandle}>
                                            Yes
                                        </Button>
                                    </>
                            }
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}
