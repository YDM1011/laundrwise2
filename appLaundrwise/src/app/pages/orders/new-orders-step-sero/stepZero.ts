export interface StepZero {
    city: string
    country: string
    company: string
}

export class StepZeroObj implements StepZero {
    public city = '';
    public country = '';
    public company = '';
    constructor() {
        return {
            city: this.city,
            country: this.country,
            company: this.company,
        };
    }
}
