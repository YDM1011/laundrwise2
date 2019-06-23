
export interface FormNotification {
    createdBy?: object
    name: string
    email: string
    mobile: string
    entity: string
    mes: string
    date?: string
}

export class FormNotificationObj implements FormNotification {
    public name: string = ''
    public email: string = ''
    public mobile: string = ''
    public entity: string = ''
    public mes: string = ''

    constructor(obj:any = null) {
        if (obj){
            return {
                name: `${obj.firstName} ${obj.lastName}`,
                email: obj.email,
                mobile: obj.mobile,
                entity: this.entity,
                mes: this.mes,
            }
        } else {
            return {
                name: this.name,
                email: this.email,
                mobile: this.mobile,
                entity: this.entity,
                mes: this.mes,
            }
        }
    }
}