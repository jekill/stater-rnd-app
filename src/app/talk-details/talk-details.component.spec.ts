import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TalkDetailsComponent} from './talk-details.component';
import {BackendService} from "../backend.service";
import {HttpModule} from "@angular/http";
import {WatchService} from "../watch.service";
import {RouterTestingModule} from "@angular/router/testing";

describe('TalkDetailsComponent', () => {
    let component: TalkDetailsComponent;
    let fixture: ComponentFixture<TalkDetailsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule, RouterTestingModule],
            providers: [BackendService, WatchService],
            declarations: [TalkDetailsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TalkDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
