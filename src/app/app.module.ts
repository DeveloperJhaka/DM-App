import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InitiativeComponent } from './initiative/initiative.component';
import { AppRoutingModule } from './shared/routers/app-routing.module';
import { InitiativeService } from './shared/services/initiative.service';
import { DiceService } from './shared/services/dice.service';
import { HomeComponent } from './home/home.component';
import { NavigationService } from './shared/services/navigation.service';
import { MediaComponent } from './media/media.component';
import { EditorComponent } from './editor/editor.component';
import { FormsModule } from '@angular/forms';
import { EventsService } from './shared/services/events.service';
import { ChangelogComponent } from './changelog/changelog.component';

@NgModule({
	declarations: [
		AppComponent,
		InitiativeComponent,
		HomeComponent,
		MediaComponent,
		EditorComponent,
		ChangelogComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule
	],
	providers: [
		InitiativeService,
		DiceService,
		NavigationService,
		EventsService
	],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
