import { Injectable } from '@angular/core';

@Injectable()
export class DiceService {
	public roll( rolls: number, sides: number, modifier: number = 0 ): number {
		let total = 0;

		for ( let roll = 0; roll < rolls; ++roll ) {
			total += Math.ceil( Math.random() * sides ) + modifier;
		}

		return total;
	}
}
