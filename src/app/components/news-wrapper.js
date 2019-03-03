import {BaseElement} from './base-element.js';
import {NewsToday} from "./news-today.js";
import {Button} from "./button.js";
import {application} from "../app";
import {NewsList} from "./news-list.js";

export class NewsWrapper extends BaseElement {

    constructor() {
        super();
    }

    createElement() {
        super.createElement();
        /*
        News Today component
         */
        let newsToday = new NewsToday('Bugün Ne oldu?', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.');
        newsToday.appendToElement(this.element);

        /*
        Left Button define
         */
        let sayac = 0;
        let ofset = 0;
        var maxOffset = 0;
        let leftButton = new Button('<');
        leftButton.setStyleString('left:440px');
        leftButton.appendToElement(this.element);
        leftButton.element.click(() => {
            let element = document.getElementById('news-item-scroll-wrapper');
            let ofsetx = element.scrollWidth / application.dataService.news.length;
            ofset -= ofsetx;
            let interval = setInterval(function () {
                sayac -= 1;
                element.scroll(sayac, 0);
                if (sayac < ofset) {
                    clearInterval(interval)
                } else if (sayac < 0) {
                    clearInterval(interval)
                }
            }, 1);

        });

        /*
        News List Component
         */
        let newsList = new NewsList(application.dataService.news);
        newsList.appendToElement(this.element);

        /*
        Right Button define
         */
        let rightButton = new Button('>');
        rightButton.setStyleString('right: 5px;');
        rightButton.appendToElement(this.element);
        rightButton.element.click(() => {
            let element = document.getElementById('news-item-scroll-wrapper');
            let ofsetx = element.scrollWidth / application.dataService.news.length;
            maxOffset = element.scrollWidth - 4 * ofsetx ;
            if (ofset + ofsetx > maxOffset) ;
            else
                ofset += ofsetx;
            let interval = setInterval(function () {
                sayac += 1;
                element.scroll(sayac, 0);
                    if (sayac > ofset) {
                    clearInterval(interval);
                }
            }, 1);
        });
    }

    getElementString() {
        return '<div  class="news-wrapper-component"></div>';
    }

}
