export const currencyFormat = (value: number | string) =>
    new Intl.NumberFormat('zh-CN', {
        style: 'currency',
        currency: 'CNY',
    }).format(value as number);

export const transformQs = (filter?: Record<string, string | (number | string)[]>) => {
    if (!filter) return '';
    const params: Record<string, string> = {}
    for (const key in filter) {
        if (filter[key]) {
            if (Array.isArray(filter[key])) {
                params[key] = filter[key].toString()
            } else
                params[key] = <string>filter[key]
        }
    }
    return `?${new URLSearchParams(params).toString()}`;
}
