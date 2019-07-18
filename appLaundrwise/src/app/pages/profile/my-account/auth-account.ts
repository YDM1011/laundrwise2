export interface AuthAccount {
    firstName: string
    lastName: string
    mobile: string
    email: string
    login?: string
    country: string
    cityCode: string
    city: string
    address1: string
    address2: string
    role: string
}

export class AuthAccountObj implements AuthAccount {
    public firstName = '';
    public lastName = '';
    public mobile = '';
    public email = '';
    public login = '';
    public country = '';
    public cityCode = '';
    public city = '';
    public address1 = '';
    public address2 = '';
    public role = '';
    constructor() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            mobile: this.mobile,
            email: this.email,
            login: this.login,
            country: this.country,
            cityCode: this.cityCode,
            city: this.city,
            address1: this.address1,
            address2: this.address2,
            role: this.role,
        };
    }
}
