import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms";
import "rxjs/add/operator/debounceTime";

@Component({
    selector: 'app-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

    filtersForm = new FormGroup({
        'title': new FormControl(),
        'speaker': new FormControl(),
        'minRating': new FormControl(0)
    });
    // filters: Filters;

    @Output() filtersChange = new EventEmitter();

    @Input()
    set filters(v) {
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
