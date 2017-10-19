import {TestBed, inject} from '@angular/core/testing';

import {WatchService} from './watch.service';
import {Talk} from "./model";

describe('WatchService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [WatchService]
        });
    });

    it('should be created', inject([WatchService], (service: WatchService) => {
        expect(service).toBeTruthy();
    }));

    it('should add talk to watched', inject([WatchService], (service: WatchService) => {
        const talk: Talk = {
            id: 123, title: 'test talk', speaker: 'Kolay', rating: 0,
            description: 'desc big text',
            yourRating: 0
        };

        expect(service.isWatched(talk)).toEqual(false);

        service.watch(talk);

        expect(service.isWatched(talk)).toEqual(true);

    }));
});
