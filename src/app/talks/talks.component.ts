import {Component, Input, OnInit} from '@angular/core';
import {Talk} from "../model";
import {BackendService} from "../backend.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-talks',
    templateUrl: './talks.component.html',
    styleUrls: ['./talks.component.css']
})
export class TalksComponent implements OnInit {

    @Input() talks: Talk[] = [];

    constructor(protected router: Router, public activeRoute: ActivatedRoute) {
        // console.log('+++++qweqweqweqwqw', activeRoute.queryParams.map());
    }

    ngOnInit() {
    }

}
