import {BaseElement} from './base-element.js';
import {Footer} from "./footer.js";

export class LeftSideBar extends BaseElement {

    constructor(newsType) {
        super();
        this.newsType = newsType;
    }

    createElement() {
        super.createElement();

        let footer = new Footer();
        footer.appendToElement(this.element)
    }

    getElementString() {
        let sidebarMenu = [];

        let newsSum = '';
        for (let item of this.newsType) {
            if (sidebarMenu.indexOf(item.newsType) == -1) {
                sidebarMenu.push(item.newsType);
                newsSum += `<li>${item.newsType}</li>`;
            }

        }
        return `
            <div class="left-sidebar-wrapper">
               <ul> ${newsSum}</ul>
            </div>
        `;
    }

    updateStyle(style) {
        this.element.attr("style", style)
    }


}

