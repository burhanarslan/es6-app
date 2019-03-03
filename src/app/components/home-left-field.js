import {BaseElement} from './base-element.js';

export class HomeLeftField extends BaseElement {

    constructor() {
        super();
    }

    getElementString() {
        return `
                <div class="main-logo-wrapper">
                    <div class="img-area"></div>
                    <div class="main-left-area"> <span class="little-point"> &nbsp;</span></div>
                </div>
        `;
    }


}

