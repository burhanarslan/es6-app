import {BaseElement} from './base-element.js';

export class SideBar extends BaseElement {

    constructor(newsData) {
        super();
        this.newsData = newsData;
        this.styleString = '';
        this.date = new Date().toJSON().slice(0, 10).replace(/-/g, '.');
    }

    getElementString() {
        let newsSum = '';
        for (let item of this.newsData) {
            newsSum += `
            <li class="slidebar">
            ${item.newsSummary}
            </li>
            `;
        }
        return `
                <div class="sidebar-component">
                <div class="sidebar-date"> ${this.date}</div>
                    <div class="slidebar-wrapper" >
                      <ul style="${this.styleString}"> ${newsSum}</ul>
                    </div>
                </div>
            
              `;
    }

    setStyleString(style) {
        this.styleString = style;
    }

}

