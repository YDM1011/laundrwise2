export interface NewCollaborator {
    firstName: string
    lastName: string
    login: string
    pass: string
    role: string
}

export class NewCollaboratorObj implements NewCollaborator {
    public firstName: string = '';
    public lastName: string = '';
    public login: string = '';
    public pass: string = '';
    public role: string = '';
    constructor() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            login: this.login,
            pass: this.pass,
            role: this.role
        };
    }
}
