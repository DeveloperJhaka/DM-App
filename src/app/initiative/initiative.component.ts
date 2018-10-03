import {Component, ElementRef, Input, QueryList, Renderer2, ViewChild, ViewChildren} from '@angular/core';
import { InitiativeService } from '../shared/services/initiative.service';
import { DiceService } from '../shared/services/dice.service';
import {EventsService} from '../shared/services/events.service';

@Component({
	selector: 'app-initiative',
	templateUrl: './initiative.component.html',
	styleUrls: ['./initiative.component.css'],
})
export class InitiativeComponent {
	@ViewChild( 'initiativeName' ) initiativeNameRef: ElementRef;
	@ViewChild( 'initiativeScore' ) initiativeScoreRef: ElementRef;
	@ViewChild( 'initiativeHitPoints' ) initiativeHitPointsRef: ElementRef;
	@ViewChildren( 'editInitiativeScore' ) editInitiativeScoreRef: QueryList< ElementRef >;

	currentIndex = 0;
	maxIndex = 0;

	constructor( public initiativeService: InitiativeService,
				 public diceService: DiceService,
				 private eventsService: EventsService,
				 private renderer: Renderer2 ) {

		if ( this.initiativeService.getNumInitiatives() === 0 ) {
			this.initiativeService.addInitiative(
				'Valamir',
				this.diceService.roll( 1, 20, -1 ),
				this.diceService.roll( 3, 8, 3 ),
				true
			);
			this.initiativeService.addInitiative(
				'Kismet',
				this.diceService.roll( 1, 20, 2 ),
				this.diceService.roll( 3, 8, 2 ),
				true
			);
			this.initiativeService.addInitiative(
				'Floki',
				this.diceService.roll( 1, 20, -1 ),
				this.diceService.roll( 3, 10, 3 ),
				true
			);
			this.initiativeService.addInitiative(
				'Asurda',
				this.diceService.roll( 1, 20, 4 ),
				this.diceService.roll( 3, 8, 1 ),
				true
			);
			this.initiativeService.addInitiative(
				'Gary',
				this.diceService.roll( 1, 20, 3 ),
				this.diceService.roll( 3, 8, -1 ),
				true
			);
		}

		// this.initiativeService.addInitiative( 'Goblin', this.diceService.roll( 1, 20, 4 ), 20 );
		// this.initiativeService.addInitiative( 'Goblin', this.diceService.roll( 1, 20, 4 ), 20 );
		// this.initiativeService.addInitiative( 'Goblin', this.diceService.roll( 1, 20, 4 ), 20 );
		// this.initiativeService.addInitiative( 'Goblin', this.diceService.roll( 1, 20, 4 ), 20 );
		// this.initiativeService.addInitiative( 'Orc', this.diceService.roll( 1, 20, 2 ), 20 );
		// this.initiativeService.addInitiative( 'Orc', this.diceService.roll( 1, 20, 2
		// ), 20 );
		// this.initiativeService.addInitiative( 'Orc', this.diceService.roll( 1, 20, 2 ), 20 );
		// this.initiativeService.addInitiative( 'Orc', this.diceService.roll( 1, 20, 2 ), 20 );

		this.eventsService.initiativeAdded.subscribe(
			() => {
				this.maxIndex = this.initiativeService.getNumInitiatives();
			}
		);

		this.maxIndex = this.initiativeService.getNumInitiatives();
	}

	onAddInitiative() {
		const name = this.initiativeNameRef.nativeElement.value;
		const value = this.initiativeScoreRef.nativeElement.value;
		const hitpoints = this.initiativeHitPointsRef.nativeElement.value;

		this.initiativeService.addInitiative( name, value, hitpoints );

		this.initiativeNameRef.nativeElement.value = '';
		this.initiativeScoreRef.nativeElement.value = '';
		this.initiativeHitPointsRef.nativeElement.value = '';

		this.initiativeScoreRef.nativeElement.focus();
	}

	onRemoveInitiative( event ) {
		this.initiativeService.removeInitiative( event.path[0].id || event.path[1].id );
	}

	onHealthDown( event ) {
		this.initiativeService.changeHealth( -1, event.path[0].id || event.path[1].id );
	}

	onHealthUp( event ) {
		this.initiativeService.changeHealth( 1, event.path[0].id || event.path[1].id );
	}

	getActive( index ) {
		if ( index === this.currentIndex ) {
			return 'table-success';
		}
	}

	changeActive( amount ) {
		this.currentIndex += amount;

		if ( this.currentIndex < 0 ) {
			this.currentIndex = this.maxIndex - 1;
		}

		if ( this.currentIndex >= this.maxIndex ) {
			this.currentIndex = 0;
		}
	}

	reset() {
		this.eventsService.initiativeReset.emit();
		this.currentIndex = 0;
	}

	buttonClassPlayer() {
		if ( this.initiativeService.isPlayerChecked() ) {
			return 'btn-primary active';
		}

		return 'btn-secondary';
	}

	playerToggled() {
		this.eventsService.playerToggled.emit();
	}

	playerText(): string {
		if ( this.initiativeService.isPlayerChecked() ) {
			return 'Player';
		}

		return 'Enemy';
	}

	hide( event ) {
		this.editInitiativeScoreRef.forEach(( ref: ElementRef ) => {
			if ( ref.nativeElement.id.includes( event.path[0].id.split( '_' )[1] )) {
				this.renderer.addClass( ref.nativeElement, 'inactive' );
				this.initiativeService.changeInitiative( ref.nativeElement.value, ref.nativeElement.id );
			}
		});
	}

	show( event ) {
		this.editInitiativeScoreRef.forEach(( ref: ElementRef ) => {
			if ( ref.nativeElement.id.includes( event.path[0].id.split( '_' )[1] )) {
				this.renderer.removeClass( ref.nativeElement, 'inactive' );
			}
		});
	}
}
