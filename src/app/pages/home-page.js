import {Page} from '../framework/page.js';
import {application} from '../app.js';
import {SideBar} from "../components/sidebar.js";
import {HomeNewsToday} from "../components/home-news-today.js";
import {HomeLeftField} from "../components/home-left-field.js";

export class HomePage extends Page {

    constructor() {
        super('Home');
    }

    createElement() {
        super.createElement();

        let customField = new HomeLeftField();
        customField.appendToElement(this.element);


        let newsToday = new HomeNewsToday('Bugün ne oldu?', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.');
        newsToday.appendToElement(this.element);

        let sidebar = new SideBar(application.dataService.news);
        sidebar.setStyleString(`height: ${application.dataService.news.length * 120}px; margin: 0; padding: 0;`);
        sidebar.appendToElement(this.element);
    }

    getElementString() {
        return `<div class="home-page-wrapper"></div>`;
    }
}
