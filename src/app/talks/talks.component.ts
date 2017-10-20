import {Component, Input, OnInit} from '@angular/core';
import {Talk} from "../model";
import {BackendService} from "../backend.service";

@Component({
    selector: 'app-talks',
    templateUrl: './talks.component.html',
    styleUrls: ['./talks.component.css']
})
export class TalksComponent implements OnInit {

    @Input() talks: Talk[] = [];

    constructor() {
    }

    ngOnInit() {
    }

}
