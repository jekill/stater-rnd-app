import {Component, OnInit} from '@angular/core';
import {Filters, Talk} from '../model';
import {BackendService} from '../backend.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-talks-and-filters',
    templateUrl: './talks-and-filters.component.html',
    styleUrls: ['./talks-and-filters.component.css']
})
export class TalksAndFiltersComponent implements OnInit {

    constructor(public backend: BackendService, private  router: Router, private  activeRoute: ActivatedRoute) {
        this.activeRoute.queryParams.subscribe((p) => {
            console.log("ROUCHNG", p);
            // backend.changeFilters(p);
        });
    }

    ngOnInit() {
    }

    handleFiltersChange(filters: Filters) {
        this.backend.changeFilters(filters);
        console.log("______",this.activeRoute.snapshot.toString());
        // this.router.navigateByUrl(this.activeRoute.snapshot.toString(), {queryParams: filters} );
    }


}
