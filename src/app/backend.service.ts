import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import {Filters, Talk} from './model';
import {of} from 'rxjs/observable/of';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BackendService {
    filters: Filters = {minRating: 0, title: null, speaker: null};

    url = 'http://localhost:4444';

    _talks: { [id: number]: Talk } = {};
    _list: number[] = [];

    constructor(private http: Http) {
        let w: any = window;
        w.__http = this.http;
    }

    public get talks(): Talk[] {
        return this._list.map(id => this._talks[id]);
    }

    findTalk(id: number): Observable<Talk> {

        if (!id) {
            return of(null);
        }

        if (this._talks[id]) {
            return of(this._talks[id]);
        }

        const params = new URLSearchParams();
        params.set('id', id.toString());

        return this.http
            .get(`${this.url}/talk`, {search: params})
            .map((result) => {
                const t = result.json()['talk'];
                if (t) {
                    this._talks[t.id] = t;
                    this._list.push(t.id);
                    return t;
                }
                return null;
            });
    }

    rateTalk(id: number, rating: number): void {
        const talk = this._talks[id];
        if (talk) {
            talk.yourRating = rating;
        }

        this.http.post(`${this.url}/rate`, {id, yourRating: rating}).forEach(_ => console.log(_));
    }

    changeFilters(newFilters): void {
        this.filters = newFilters;
        this.refetch();
    }

    refetch(): Promise<void> {
        // let params = new URLSearchParams();
        // params.set("se")
        const params = new URLSearchParams();
        for (let key in this.filters) {
            params.set(key, this.filters[key]);
        }


        return this.http.get(`${this.url}/talks`, {search: params}).forEach((r) => {
            const data = r.json();
            this._talks = data.talks;
            this._list = data.list;
        });
    }
}