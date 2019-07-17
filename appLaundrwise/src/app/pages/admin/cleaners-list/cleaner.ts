export interface Cleaner {
    name: string
    superManager?: string
    country: string
    city: string
    address: string
    product: string[]
    category: string[]
    date: string
    images: string
}

export class CleanerObj implements Cleaner {
    public name: string = ''
    public superManager?: string = ''
    public country: string = ''
    public city: string = ''
    public address: string = ''
    public product = []
    public category = []
    public date: string = ''
    public images: string = ''

    constructor() {
        return {
            name: this.name,
            superManager: this.superManager,
            country: this.country,
            city: this.city,
            address: this.address,
            product: this.product,
            category: this.category,
            date: this.date,
            images: this.images
        }
    }
}