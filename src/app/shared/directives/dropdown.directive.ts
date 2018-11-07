import { Directive, HostBinding, HostListener } from '@angular/core';
import { EventsService } from '../services/events.service';

@Directive({
	selector: '[appDropdown]'
})
export class DropdownDirective {
	@HostBinding( 'class.open' ) isOpen = false;

	constructor( private eventsService: EventsService ) {
		this.eventsService.dropdownToggled.subscribe( () => {
			this.isOpen = false;
		});
	}

	@HostListener( 'click' ) toggleOpen() {
		const currentState = this.isOpen;
		this.eventsService.dropdownToggled.emit();
		this.isOpen = !currentState;
	}
}
