export class Pokemon {
    public name: string;
    public url: string;


    static clone(data: Pokemon) {
        let id = '';
        if (Number(data.url.split('/')[6]) < 10) {
            id = `00${Number(data.url.split('/')[6])}`;
        } else if (Number(data.url.split('/')[6]) < 100) {
            id = `0${Number(data.url.split('/')[6])}`;
        } else {
            id = `${Number(data.url.split('/')[6])}`;
        }
        return id;
    }
}
