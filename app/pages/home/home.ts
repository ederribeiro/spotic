import {Page} from 'ionic-angular';
import {SpotifyService} from '../../services/spotify';

@Page({
  templateUrl: 'build/pages/home/home.html',
  providers: [SpotifyService]
})
export class HomePage {
  public news;
  public music;
  constructor(private spotify: SpotifyService) {
  }

  getMusic() {
        this.spotify.search(this.music).subscribe(
            data => {
                this.news = data.json().tracks.items;
            },
            err => console.error(err),
            () => console.log(this.news)
        );
    }
}
