export interface Category {
    name: string
    icon: string
    product: string[]
    date: string
    checked?: boolean
}

export class CategoryObj implements Category {
    public name: string = ''
    public icon: string = ''
    public product = []
    public date: string = ''
    public checked?: boolean = false

    constructor() {
        return {
            name: this.name,
            icon: this.icon,
            product: this.product,
            date: this.date,
            checked: this.checked
        }
    }
}