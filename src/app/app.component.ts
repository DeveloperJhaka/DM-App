import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from './shared/services/navigation.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	title = 'DM App';
	version = 'v0.1';
	release = 'alpha';

	constructor( private router: Router,
				 public navigationService: NavigationService ) { }

	onActivate() {
		const url = this.router.routerState.snapshot.url.substring(1);
		this.navigationService.setCurrentUrl( url );
	}
}
