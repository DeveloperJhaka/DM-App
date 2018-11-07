export class DiceRollOutcomeModel {
	public average: number;
	public outcomeCount: number;
	public totalResults: number;
	constructor( public number: number,
				 public die: number,
				 public lowest: number,
				 public highest: number,
				 public outcomes: number[] ) {
		this.average = ( lowest + highest ) * 0.5;
		this.outcomeCount = highest - lowest + 1;
		this.totalResults = Math.pow( die, number );
	}
}
