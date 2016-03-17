import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';

@Injectable()
export class SpotifyService {
    constructor(private http: Http) {
    }

    search(music) {
        let repos = this.http.get(`https://api.spotify.com/v1/search?q=`+music+`&type=track`);
        return repos;
    }
}
