import {Injectable} from '@angular/core';
import {Talk} from './model';

@Injectable()
export class WatchService {

    watched: { [id: number]: boolean } = {};


    watch(talk: Talk): void {
        this.watched[talk.id] = true;
    }

    isWatched(talk: Talk): boolean {
        return Boolean(this.watched[talk.id]);
    }
}
