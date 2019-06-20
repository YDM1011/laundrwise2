export interface Post {
    title: string
    text: string
    images: string[]
    date: string
}

export class PostObj implements Post {
    public title: string = ''
    public text: string = ''
    public images: string[] = []
    public date: string = ''

    constructor() {
        return {
            title: this.title,
            text: this.text,
            images: this.images,
            date: this.date
        }
    }
}