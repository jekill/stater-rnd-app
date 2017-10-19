import {Component, OnInit} from '@angular/core';
import {Filters} from "../model";
import {BackendService} from "../backend.service";

@Component({
    selector: 'app-talks-and-filters',
    templateUrl: './talks-and-filters.component.html',
    styleUrls: ['./talks-and-filters.component.css']
})
export class TalksAndFiltersComponent implements OnInit {

    constructor(private backend: BackendService) {
    }

    ngOnInit() {
    }

    handleFiltersChange(filters: Filters) {
        this.backend.changeFilters(filters);
    }

}
