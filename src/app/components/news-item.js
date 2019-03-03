import {BaseElement} from './base-element.js';

export class NewsItem extends BaseElement {

    constructor(data) {
        super();
        this.data = data;
    }

    getElementString() {
        let trTags = '';
        return `
            <div  class="news-item-wrapper">
              <div class="news-item-area">
                         <div class="news-item-date">
                             ${this.data.date}
                         </div>
                         <div class="news-item-time">
                         <i class="far fa-clock"></i>
                             ${this.data.time}
                         </div>
                         <div class="news-item-summary">
                              ${this.data.newsSummary}
                         </div>
                         <div class="news-item-type">
                              ${this.data.newsType}
                         </div>
                         <div class="news-item-image">
                             <img id="news-image" src=" ${this.data.newsImage}" alt="">
                         </div>
                         <div class="news-item-detail">
                               ${this.data.newsDetail}
                         </div>
                        </div>
              </div>          
        `;
    }

    updateStyle(index) {
        let all = document.querySelectorAll('#news-image');
        [].forEach.call(all, function (el) {
            el.removeAttribute('style');
            el.setAttribute('style', 'width: 300px;   transition: width 0.5s;');
        });
        all[index].setAttribute('style', 'width: 400px;   transition: width 0.5s;');
    }

}
