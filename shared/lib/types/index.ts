export enum SIZE {
    SMALL='Small',
    MEDIUM='Medium',
    LARGE='Large',
}

export type Product = {
    id:             number;
    model:          string;
    name:           string;
    image:          string;
    description:    string;
    sizes:          SIZE[];
    price:          string;
    special:        string;
    priceInCents:   number;
    specialInCents: number;
}

export type SlimProductOrder = {
    id: number
    size?: SIZE
}

export type PayloadOrder = {
    products: SlimProductOrder[]
}

export type OrderResponse = {
    orderId: number
}

export type Pagination = {
    count: number,
    total: number,
    pageCount: number,
    page: number
}

export type ResponsePagination<E> = {
    data: E[]
} & Pagination