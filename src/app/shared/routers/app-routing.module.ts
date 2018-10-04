import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitiativeComponent } from '../../initiative/initiative.component';
import { HomeComponent } from '../../home/home.component';
import { EditorComponent } from '../../editor/editor.component';
import { MediaComponent } from '../../media/media.component';
import { ChangelogComponent } from '../../changelog/changelog.component';
import { SpotifyComponent } from '../../spotify/spotify.component';

const appRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'initiative', component: InitiativeComponent },
	{ path: 'editor', component: EditorComponent },
	{ path: 'media', component: MediaComponent },
	{ path: 'spotify', component: SpotifyComponent },
	{ path: 'changelog', component: ChangelogComponent }
];

@NgModule({
	imports: [
		RouterModule.forRoot( appRoutes )
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {}
