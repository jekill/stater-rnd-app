import {Component, OnInit} from '@angular/core';
import {Filters, Talk} from "../model";
import {BackendService} from "../backend.service";

@Component({
    selector: 'app-talks-and-filters',
    templateUrl: './talks-and-filters.component.html',
    styleUrls: ['./talks-and-filters.component.css']
})
export class TalksAndFiltersComponent implements OnInit {

    constructor(public backend: BackendService) {
        backend.refetch();
    }

    ngOnInit() {
    }

    handleFiltersChange(filters: Filters) {
        this.backend.changeFilters(filters);
    }

}
