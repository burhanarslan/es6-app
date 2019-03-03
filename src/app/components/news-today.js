import {BaseElement} from './base-element.js';
import {Footer} from "./footer.js";

export class NewsToday extends BaseElement {

    constructor(title, detail) {
        super();
        this.title = title;
        this.detail = detail;
        this.getDate = new Date().toJSON().slice(0, 10).replace(/-/g, '.');

    }

    createElement() {
        super.createElement();
        let footer = new Footer();
        footer.appendToElement(this.element);
    }

    getElementString() {
        return `
            <div class="news-today-wrapper">
                <div class="news-today-date">${this.getDate}</div>
                <div class="news-today-title">${this.title}</div >
                <div class="news-today-detail">${this.detail}</div>
                
            </div>
        `;
    }


}

