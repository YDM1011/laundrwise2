export interface Cleaner {
    name: string
    country: string
    city: string
    address: string
    product: string[]
    category: string[]
    date: string
}

export class CleanerObj implements Cleaner {
    public name: string = ''
    public country: string = ''
    public city: string = ''
    public address: string = ''
    public product = []
    public category = []
    public date: string = ''

    constructor() {
        return {
            name: this.name,
            country: this.country,
            city: this.city,
            address: this.address,
            product: this.product,
            category: this.category,
            date: this.date
        }
    }
}