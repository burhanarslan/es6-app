export class NewsDataService {
    constructor() {
        this.news = [];
    }

    loadData(fleet) {
        for (let data of fleet) {
            this.news.push(data);
        }
    }
}
