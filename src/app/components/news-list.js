import {BaseElement} from './base-element.js';
import {NewsItem} from "./news-item.js";

export class NewsList extends BaseElement {

    constructor(data) {
        super();
        this.data = data;
    }

    createElement() {
        super.createElement();
        for (let [index, row] of this.data.entries()) {
            let item = new NewsItem(row);
            item.appendToElement(this.element);
            item.element.click(() => {
                if (window.innerWidth > 376)
                    item.updateStyle(index);
            });
        }
    }

    getElementString() {
        return '<div id="news-item-scroll-wrapper" class="news-list-component-wrapper"></div>';
    }

}
