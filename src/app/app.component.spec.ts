import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {TalksAndFiltersComponent} from './talks-and-filters/talks-and-filters.component';
import {TalkDetailsComponent} from "./talk-details/talk-details.component";
import {FiltersComponent} from "./filters/filters.component";
import {TalksComponent} from "./talks/talks.component";
import {BackendService} from "./backend.service";
import {HttpModule} from "@angular/http";
import {RouteModule} from "./route/route.module";
import {RouteRoutingModule} from "./route/route-routing.module";
import {RouterTestingModule} from "@angular/router/testing";

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                TalksAndFiltersComponent,
                TalkDetailsComponent,
                FiltersComponent,
                TalksComponent
            ],
            imports: [HttpModule, RouterTestingModule],
            providers: [
                BackendService,
            ]
        }).compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    it(`should have as title 'app'`, async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('app');
    }));
    it('should render title in a h1 tag', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('TALKS APP');
    }));
});
