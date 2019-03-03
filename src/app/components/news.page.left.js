import {BaseElement} from './base-element.js';
import {LeftSideBar} from "./left-sidebar.js";
import {application} from "../app.js";
import {LeftSidebarButton} from "./left-sidebar-button.js";

export class NewsPageLeft extends BaseElement {

    constructor() {
        super();
    }

    createElement() {
        super.createElement();

        let isOpen = false;
        let styleString = 'background: rgba(207, 22, 28 , 1); color: #fff; border-right: 1px solid #980404;';
        let sidebarMenu = new LeftSideBar(application.dataService.news);

        let b = new LeftSidebarButton('');
        b.appendToElement(this.element);

        sidebarMenu.appendToElement(this.element);
        b.element.click(() => {
            if (isOpen == false) {
                b.updateStyle(styleString, 'fas fa-times');
                sidebarMenu.updateStyle('width: 372px');
            } else {
                b.updateStyle('background: #fff; color: #000; border-right: 1px solid #d5d5d5;', 'fas fa-grip-lines-vertical');
                sidebarMenu.updateStyle('width: 0');
            }
            isOpen = !isOpen;
        });
    }
    getElementString() {
        return `
            <div class="logo-wrapper">
                <div class="logo">
                     <div class="img-area"></div>
                </div>
                 <span class="little-point"> &nbsp;</span>
             </div>
           
        `;
    }
}
