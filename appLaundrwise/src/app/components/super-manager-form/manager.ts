export interface Manager {
    login: string
    pass: string
    firstName: string
    lastName: string
    role: string
}
export class ManagerObj implements Manager{
    public login: string = '';
    public pass: string = '';
    public firstName: string = '';
    public lastName: string = '';
    public role: string = 'superManagerCleaner';
    constructor () {
        return {
            login: this.login,
            pass: this.pass,
            firstName: this.firstName,
            lastName: this.lastName,
            role: this.role
        }
    }
}