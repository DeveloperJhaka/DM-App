export class Initiative {
	private id;
	private hitPointMin = 0;
	private hitPointMax = 9999;
	private appendix;
	private appendices = [
		'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
		'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
	];

	constructor( id: number, public name: string, public score: number, public hitPoints: number, public player: boolean, public count: number = 0, private editing = false ) {
		this.setAppendix();
		this.id = id.toString( 10 );
	}

	setAppendix() {
		if ( this.count > Math.pow( this.appendices.length, 2 )) {
			this.appendix = '[???]';

			return;
		}

		let times = 1;
		let count = this.count;

		while ( count > this.appendices.length ) {
			count -= this.appendices.length;
			times++;
		}

		this.appendix = ' [';

		if ( times > 1 ) {
			this.appendix += this.appendices[ times - 2 ];
		}

		this.appendix += this.appendices[ count - 1 ];
		this.appendix += ']';
	}

	public setCount( count ) {
		this.count = count;
		this.setAppendix();
	}

	public getName() {
		return this.count === 0 ? this.name : this.name + this.appendix;
	}

	public getType() {
		if ( this.player ) {
			return 'Player';
		}

		return 'Enemy';
	}

	public getID() {
		return this.id;
	}

	public getScore() {
		return this.score;
	}

	public setScore( score ) {
		this.score = score;
	}

	public getHitPoints() {
		return this.hitPoints;
	}

	public addHitPoints( amount ) {
		this.hitPoints += amount;

		if ( this.hitPoints < this.hitPointMin ) {
			this.hitPoints = this.hitPointMin;
		}

		if ( this.hitPoints > this.hitPointMax ) {
			this.hitPoints = this.hitPointMax;
		}
	}

	public isPlayer() {
		return this.player;
	}

	public setEditing( editing ) {
		console.log( 'set', editing );
		this.editing = editing;
	}

	public isEditing() {
		return this.editing;
	}
}
