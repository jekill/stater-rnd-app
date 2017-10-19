import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TalksAndFiltersComponent} from './talks-and-filters.component';
import {TalksComponent} from "../talks/talks.component";
import {FiltersComponent} from '../filters/filters.component';
import {BackendService} from "../backend.service";
import {HttpModule} from "@angular/http";
import {RouterTestingModule} from "@angular/router/testing";
import {RouteRoutingModule} from "../route/route-routing.module";
import {TalkDetailsComponent} from "../talk-details/talk-details.component";

describe('TalksAndFiltersComponent', () => {
    let component: TalksAndFiltersComponent;
    let fixture: ComponentFixture<TalksAndFiltersComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                TalksAndFiltersComponent,
                TalksComponent,
                FiltersComponent,
                TalkDetailsComponent
            ],
            imports: [HttpModule, RouteRoutingModule, RouterTestingModule],
            providers: [BackendService]

        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TalksAndFiltersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
