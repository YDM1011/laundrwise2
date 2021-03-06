export interface OrderProduct {
    name: string
    des: string
    price: string
    images: string
    categoryOwner: string
    createdBy: string
    count: number
    totalPrice: number
    _id?: string

    map?(param: (ord) => any): void;
}

export class OrderProductObj implements OrderProduct {
    public name: string = '';
    public des: string = '';
    public price: string = '';
    public images: string = '';
    public categoryOwner: string = '';
    public createdBy: string = '';
    public count: number = 0;
    public totalPrice: number = 0;
    public _id: string = '';

    constructor() {
        return {
            name: this.name,
            des: this.des,
            price: this.price,
            images: this.images,
            categoryOwner: this.categoryOwner,
            createdBy: this.createdBy,
            count: this.count,
            totalPrice: this.totalPrice,
            _id: this._id
        };
    }
}
