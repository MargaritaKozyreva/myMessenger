export default class Service {

    _apiBase = `https://jsonplaceholder.typicode.com/`;

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`${this._apiBase}${url}, Could't fetch`);
        }

        const body = await res.json();
        return body;
    }

    async getAllPeople() {
        const res = await this.getResource(`users`).then(res => res);
        return res
    }

    async getPerson(id) {
        const res = await this.getResource(`users/${id}/`);
        return res
    }

    async getComments() {
        const res = await this.getResource(`comments`).then(res => res);
        return res;
    }

    async getPhotos() {
        const res = await this.getResource(`photos`).then(res=>res);
        return res
    }
}
