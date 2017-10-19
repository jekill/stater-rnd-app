import {Component, OnInit} from '@angular/core';
import {Talk} from "../model";
import {BackendService} from "../backend.service";

@Component({
    selector: 'app-talks',
    templateUrl: './talks.component.html',
    styleUrls: ['./talks.component.css']
})
export class TalksComponent implements OnInit {

    talks: Talk[] = [];

    constructor(private backend: BackendService) {
        backend.refetch().then(_ => this.talks = backend.talks);
    }

    ngOnInit() {
    }

}
