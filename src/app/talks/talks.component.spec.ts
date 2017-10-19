import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TalksComponent} from './talks.component';
import {BackendService} from '../backend.service';
import {HttpModule} from '@angular/http';
import {RouteRoutingModule} from '../route/route-routing.module';
import {TalksAndFiltersComponent} from '../talks-and-filters/talks-and-filters.component';
import {TalkDetailsComponent} from '../talk-details/talk-details.component';
import {FiltersComponent} from '../filters/filters.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('TalksComponent', () => {
    let component: TalksComponent;
    let fixture: ComponentFixture<TalksComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TalksComponent, TalksAndFiltersComponent, TalkDetailsComponent, FiltersComponent],
            imports: [HttpModule, RouteRoutingModule, RouterTestingModule],
            providers: [BackendService]

        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TalksComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have talks list', () => {
        expect( component.talks).toBeDefined();
        expect( Array.isArray(component.talks)).toBe(true);
    });
});
