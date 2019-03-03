import $ from 'jquery';
import {Page} from '../framework/page.js';
import {NewsList} from '../components/news-list.js';
import {NewsPageLeft} from "../components/news.page.left.js";
import {NewsWrapper} from "../components/news-wrapper.js";


export class NewsPage extends Page {

    constructor() {
        super('NewsList');
    }

    createElement() {
        super.createElement();
        let logoItem = new NewsPageLeft();
        logoItem.appendToElement(this.element);
        let newsWrapper = new NewsWrapper();
        newsWrapper.appendToElement(this.element);
    }

    getElementString() {
        return '<div class="news-page-wrapper"></div>';
    }
}
