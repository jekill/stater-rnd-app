import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms";
import "rxjs/add/operator/debounceTime";
import {Filters} from "../model";

@Component({
    selector: 'app-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

    filtersForm = new FormGroup({
        'title': new FormControl(),
        'speaker': new FormControl('', null),
        'minRating': new FormControl(0)
    });
    // filters: Filters;

    @Output() filtersChange = new EventEmitter();

    @Input()
    set filters(v: Filters) {
        v = Object.assign({title: '', minRating: 0, speaker: ''}, v) as Filters;
        this.filtersForm.setValue(v);
    }

    constructor() {
        this.filtersForm.valueChanges.debounceTime(200).subscribe(_ => {
            console.log(_);
            this.filtersChange.next(_);
        });
    }

    ngOnInit() {
    }

}
