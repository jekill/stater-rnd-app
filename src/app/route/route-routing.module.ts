import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TalksAndFiltersComponent} from '../talks-and-filters/talks-and-filters.component';
import {TalkDetailsComponent} from '../talk-details/talk-details.component';
import {TwoColumnLayoutComponent} from '../two-column-layout/two-column-layout.component';
import {TalksComponent} from '../talks/talks.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'talks',
        pathMatch: 'full'
    },
    {
        path: 'talks',
        component: TalksAndFiltersComponent,
    },
    {
        path: 'talks/details',
        component: TwoColumnLayoutComponent,
        children: [
            {
                path: ':id',
                component: TalkDetailsComponent,
                outlet: 'right'
            },
            {
                path: 'left',
                component: TalksAndFiltersComponent,
                outlet: 'left'
            }
        ]
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class RouteRoutingModule {
}
