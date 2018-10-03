import { Injectable } from '@angular/core';

@Injectable()
export class NavigationService {
	private currentLocation = undefined;

	setCurrentUrl( url ) {
		let index;
		if ( url.indexOf( '/') !== -1 ) {
			index = url.indexOf( '/' );
		} else {
			index = url.length;
		}

		url = url.substring( 0, index );

		this.currentLocation = url;
	}

	getCurrentUrl() {
		return this.currentLocation;
	}
}
