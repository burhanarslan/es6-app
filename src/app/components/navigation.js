import {BaseElement} from './base-element.js';
import {application} from "../app.js";
import {NavigationButton} from "./navigation-button.js";

export class Navigation extends BaseElement {

    constructor( ) {
        super();
    }

    createElement() {
        super.createElement();
        let button = new NavigationButton('Hemen Oku');
        button.appendToElement(this.element);
        button.element.click(() => application.activateRoute('NewsList'));
    }

    getElementString() {
        return `
            <div class="navigation-wrapper">
                 <div class="navigation-icon"><i class="fas fa-align-justify"></i></div>
            </div>
        `;
    }


}

