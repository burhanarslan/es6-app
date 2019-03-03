import {BaseElement} from './base-element.js';

export class TitleBar extends BaseElement {

    constructor(title) {
        super();
        this.title = title;
        this.links = [];
    }

    addLink(title, href) {
        this.links.push({
            title,
            href
        });
    }

    getElementString() {
        return `
           <div>
               
               <div class="page-content"><!-- Your content goes here --></div>
           </div>
        `;
    }
}
