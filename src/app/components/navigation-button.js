import {BaseElement} from './base-element.js';

export class NavigationButton extends BaseElement {

    constructor(title) {
        super();
        this.title = title;
    }
    getElementString() {
        return `
            <button class="navigation-button-component">${this.title}</button>
        `;
    }
}
