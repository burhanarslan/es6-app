import $ from 'jquery';
import {fleet} from './news-data.js';
import {NewsDataService} from './services/news-data-service.js';
import {ApplicationBase} from './framework/application-base.js';
import {HomePage} from './pages/home-page.js';
import {NewsPage} from "./pages/news-page.js";
import {GamePage} from "./pages/game-page";

export class App extends ApplicationBase {

    constructor() {
        super('My ES6 App');
        this.dataService = new NewsDataService();
        this.dataService.loadData(fleet);

        this.addRoute('Home', new HomePage(), true);
        this.addRoute('NewsList', new NewsPage());
        this.addRoute('Game', new GamePage());


    }
}

export let application = new App();
application.show($('body'));
