import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TalksAndFiltersComponent} from './talks-and-filters/talks-and-filters.component';
import {TalkDetailsComponent} from './talk-details/talk-details.component';
import {FiltersComponent} from './filters/filters.component';
import {TalksComponent} from './talks/talks.component';
import {TalkComponent} from './talk/talk.component';
import {RateButtonComponent} from './rate-button/rate-button.component';
import {WatchButtonComponent} from './watch-button/watch-button.component';
import {HttpModule} from '@angular/http';
import {BackendService} from './backend.service';
import {RouteRoutingModule} from './route/route-routing.module';
import {WatchService} from './watch.service';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        TalksAndFiltersComponent,
        TalkDetailsComponent,
        FiltersComponent,
        TalksComponent,
        TalkComponent,
        RateButtonComponent,
        WatchButtonComponent
    ],
    imports: [
        BrowserModule,
        RouteRoutingModule,
        HttpModule,
        ReactiveFormsModule
    ],
    providers: [BackendService, WatchService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
