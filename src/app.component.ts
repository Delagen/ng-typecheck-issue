import {Component, OnInit} from '@angular/core';

export interface ITest {
    test?: {
        [index: string]: any;
    }
}

export interface IParam {
    "test.test": ITest;

    [index: string]: ITest | undefined;
}

@Component({
    selector: 'app',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    test: IParam;

    constructor() {
    }

    ngOnInit() {
    }
}
