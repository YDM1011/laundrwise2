export interface Product {
    name: string
    des: string
    price: string
    images: string
    categoryOwner: string
}

export class ProductObj implements Product {
    public name: string = '';
    public des: string = '';
    public price: string = '';
    public images: string = '';
    public categoryOwner: string = '';

    constructor() {
        return {
            name: this.name,
            des: this.des,
            price: this.price,
            images: this.images,
            categoryOwner: this.categoryOwner
        };
    }
}
