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
        let button2 = new NavigationButton('Game');
        button2.appendToElement(this.element);
        button2.element.click(() => application.activateRoute('Game'));
    }

    getElementString() {
        return `
            <div class="navigation-wrapper">
                 <div class="navigation-icon"><i class="fas fa-align-justify"></i></div>
            </div>
        `;
    }


}

