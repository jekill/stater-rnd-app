import {Component, OnInit} from '@angular/core';
import {Talk} from '../model';
import {BackendService} from '../backend.service';
import {ActivatedRoute} from "@angular/router";
import "rxjs/add/operator/mergeMap";
import {WatchService} from "../watch.service";

@Component({
    selector: 'app-talk-details',
    templateUrl: './talk-details.component.html',
    styleUrls: ['./talk-details.component.css']
})
export class TalkDetailsComponent implements OnInit {

    talk: Talk;

    constructor(private route: ActivatedRoute,
                private backend: BackendService,
                private watch: WatchService) {
        this.route.params.mergeMap(p => {
            return this.backend.findTalk(p.id);
        }).subscribe((t) => this.talk = t);

    }

    handleRate(id: number, newRating: number) {
        this.backend.rateTalk(id, newRating);
    }

    handleWatch() {
        this.watch.watch(this.talk);
    }

    isWatched() {
        return this.watch.isWatched(this.talk);
    }

    ngOnInit() {
    }

}
