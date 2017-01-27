import { Component } from '@angular/core';

import '../customElements/x-spinner';

@Component({
    selector: 'my-app',
    template: `
        <div class='app'>
            hello, my name is app
            <x-spinner></x-spinner>
        </div>
    `
})
export default class App {
    constructor() {
        this.what = "a good time!";
    }
};
