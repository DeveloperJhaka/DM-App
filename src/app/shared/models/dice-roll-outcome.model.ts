export class DiceRollOutcomeModel {
	public lowest: number;
	public highest: number;
	public average: number;
	public outcomeCount: number;
	public totalResults: number;
	constructor( public number: number,
				 public die: number,
				 public outcomes: number[] ) {
		this.lowest = number;
		this.highest = number * die;
		this.average = ( this.lowest + this.highest ) * 0.5;
		this.outcomeCount = this.highest - this.lowest + 1;
		this.totalResults = Math.pow( die, number );
	}
}
