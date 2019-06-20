export interface AuthAdmin {
    login: string
    pass: string
}

export class AuthAdminObj implements AuthAdmin{
    public login = '';
    public pass = '';
    constructor(){
        return {
            login: this.login,
            pass: this.pass
        }
    }
}
