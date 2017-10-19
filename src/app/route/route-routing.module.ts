import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TalksAndFiltersComponent} from '../talks-and-filters/talks-and-filters.component';
import {TalkDetailsComponent} from '../talk-details/talk-details.component';

const routes: Routes = [
    {
        path: 'talks',
        component: TalksAndFiltersComponent
    },
    {
        path: 'talks/:id',
        component: TalkDetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RouteRoutingModule {
}