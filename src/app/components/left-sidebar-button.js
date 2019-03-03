import {BaseElement} from './base-element.js';

export class LeftSidebarButton extends BaseElement {

    constructor(title) {
        super();
        this.title = title;
    }

    getElementString() {
        return `
            <button class="fas fa-grip-lines-vertical left-sidebar-button"></button>
        `;
    }

    updateStyle(style, addClass) {
        this.element.attr('class', addClass + ' left-sidebar-button');
        this.element.attr("style", style)
    }
}
