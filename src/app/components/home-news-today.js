import {BaseElement} from './base-element.js';
import {Navigation} from "./navigation";
import {Footer} from "./footer.js";

export class HomeNewsToday extends BaseElement {

    constructor(title, detail) {
        super();
        this.title = title;
        this.detail = detail;
    }

    createElement() {
        super.createElement();
        let navi = new Navigation();
        navi.appendToElement(this.element);
        let footer = new Footer();
        footer.appendToElement(this.element);
    }

    getElementString() {
        return `
            <div class="news-today-wrapper">
              <div class="news-today-title">${this.title}</div>
              <div class="news-today-detail">${this.detail}</div>      
            </div>
        `;
    }

}

