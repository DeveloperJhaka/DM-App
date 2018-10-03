import { Injectable } from '@angular/core';
import { Initiative } from '../models/initative.model';
import { EventsService } from './events.service';

@Injectable()
export class InitiativeService {
	private initiatives: Initiative[] = [];
	private index = 0;
	private isPlayer;

	constructor( private eventsService: EventsService ) {
		this.eventsService.initiativeReset.subscribe(
			() => {
				this.resetInitiative();
			}
		);

		this.eventsService.playerToggled.subscribe(
			() => {
				this.isPlayer = !this.isPlayer;
			}
		);

		this.eventsService.editInitiative.subscribe(
			({ id, editing }) => {
				this.setEditingInitiative( id, editing );
			}
		);

		this.eventsService.updateInitiative.subscribe(
			({ id, score }) => {
				this.updateInitiative( id, score );
			}
		);

		this.isPlayer = false;
	}

	public addInitiative( name, value, hitpoints, player = false ) {

		if ( name === '' || value === '' ) {
			return;
		}

		if ( this.initiativeContainsName( name )) {
			this.addInitiativeDuplicate( name, value, hitpoints, player );
		} else {
			this.initiatives.push( new Initiative( this.index++, name, value, hitpoints, player ));
		}

		this.sortInitiatives();
	}

	private addInitiativeDuplicate( name, value, hitpoints, player ) {
		let count = 0;

		for ( const initiative of this.initiatives ) {
			if ( initiative.name === name ) {
				if ( initiative.count === 0 ) {
					initiative.setCount( 1 );
				}

				count = Math.max( count, initiative.count );
			}
		}

		this.initiatives.push( new Initiative( this.index++, name, value, hitpoints, player, count + 1 ));
	}

	public removeInitiative( id ) {
		id = id.split( '_' )[1];

		if ( this.initiativeContainsID( id )) {
			const index = this.initiatives.map( function( initiative ) {
				return initiative.getID();
			}).indexOf( id );

			this.initiatives.splice( index, 1 );
		}

		this.sortInitiatives();
	}

	public getInitiatives(): Initiative[] {
		return this.initiatives;
	}

	public getNumInitiatives(): number {
		return this.initiatives.length;
	}

	private initiativeContainsName( name ): boolean {
		let containsName = false;

		for ( const initiative of this.initiatives ) {
			if ( initiative.getName().split( ' ' )[0] === name ) {
				containsName = true;
			}
		}

		return containsName;
	}

	private initiativeContainsID( id ): boolean {
		let containsID = false;

		for ( const initiative of this.initiatives ) {
			if ( initiative.getID() === id ) {
				containsID = true;
			}
		}

		return containsID;
	}

	private sortInitiatives() {
		this.eventsService.initiativeAdded.emit();

		this.initiatives.sort( function( a, b ) {
			if ( a.score > b.score ) {
				return -1;
			} else if ( a.score < b.score ) {
				return 1;
			} else {
				return 0;
			}
		});
	}

	public changeHealth( amount, id ) {
		id = id.split( '_' )[1];

		if ( this.initiativeContainsID( id )) {
			const index = this.initiatives.map( function( initiative ) {
				return initiative.getID();
			}).indexOf( id );

			this.initiatives[ index ].addHitPoints( amount );
		}
	}

	private resetInitiative() {
		for ( const initiative of this.initiatives ) {
			if ( !initiative.isPlayer() ) {

				// delete this initiative
				const index = this.initiatives.map( function( init ) {
					return init.getID();
				}).indexOf( initiative.getID() );

				this.initiatives.splice( index, 1 );
			}
		}
	}

	public isPlayerChecked(): boolean {
		return this.isPlayer;
	}

	private setEditingInitiative( id, editing ) {
		console.log( id, editing );
		if ( this.initiativeContainsID( id )) {
			const index = this.initiatives.map( function( initiative ) {
				return initiative.getID();
			}).indexOf( id );

			this.initiatives[ index ].setEditing( editing );
		}
	}

	public isEditingInitiative( id ): boolean {
		if ( this.initiativeContainsID( id )) {
			const index = this.initiatives.map( function( initiative ) {
				return initiative.getID();
			}).indexOf( id );

			return this.initiatives[ index ].isEditing();
		}
	}

	private updateInitiative( id, score ) {
		if ( this.initiativeContainsID( id )) {
			const index = this.initiatives.map( function( initiative ) {
				return initiative.getID();
			}).indexOf( id );

			return this.initiatives[ index ].setScore( score );
		}
	}
}
