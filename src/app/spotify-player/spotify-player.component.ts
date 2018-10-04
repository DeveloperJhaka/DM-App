import { Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'app-spotify-player',
	templateUrl: './spotify-player.component.html',
	styleUrls: ['./spotify-player.component.css']
})
export class SpotifyPlayerComponent implements OnInit {
	@Input() name: string;
	@Input() image: string;
	@Input() url: string;
	spotifyUrl = 'https://open.spotify.com/playlist/';
	imageUrl = 'https://pl.scdn.co/images/pl/default/';

	ngOnInit() {
	}

	getUrl() {
		return this.spotifyUrl + this.url;
	}
	getName() {
		return this.name;
	}

	getImage() {
		console.log( this.imageUrl, this.image );
		return this.imageUrl + this.image;
	}
}
