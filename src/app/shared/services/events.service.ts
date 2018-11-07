import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class EventsService {
	initiativeAdded = new EventEmitter();
	initiativeReset = new EventEmitter();
	playerToggled = new EventEmitter();
	editInitiative = new EventEmitter<{ id: number, editing: boolean }>();
	updateInitiative = new EventEmitter<{ id: number, score: number }>();
	fileLoaded = new EventEmitter();
	dropdownToggled = new EventEmitter();
}
