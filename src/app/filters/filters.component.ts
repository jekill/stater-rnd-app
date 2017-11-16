import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import {Filters} from '../model';
import * as _ from 'underscore';

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
        // this.filtersForm.setValue(v);
        const formVals = this.filtersForm.getRawValue();
        console.log("RAW VALS", formVals);

        if (!_.isEqual(formVals, v)) {
            this.filtersForm.setValue(v);
        }
        // this.filtersForm.set;
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
