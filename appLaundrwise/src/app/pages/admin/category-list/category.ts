export interface Category {
    name: string
    icon: string
    product: string[]
    date: string
}

export class CategoryObj implements Category {
    public name: string = ''
    public icon: string = ''
    public product = []
    public date: string = ''

    constructor() {
        return {
            name: this.name,
            icon: this.icon,
            product: this.product,
            date: this.date
        }
    }
}