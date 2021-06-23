export enum OrderParam {
    'asc',
    'desc'
}

export type OrderParamType = keyof typeof OrderParam;