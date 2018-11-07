export class DiceTreeModel {
	public root: DiceNodeModel;
	private outcomes;

	constructor() {
		this.root = new DiceNodeModel( -1, null );
	}

	public getOutcomes(): number[] {
		this.outcomes = [];
		this.calculateOutcomes( this.root );

		return this.outcomes;
	}

	private calculateOutcomes( node ) {
		if ( node.children !== undefined ) {
			for ( let i = 0; i < node.children.length; ++i ) {
				this.calculateOutcomes( node.children[i] );
			}
		} else {
			let currentNode = node;
			let total = 0;
			while ( currentNode.value > 0 ) {
				total += currentNode.value;
				currentNode = currentNode.parent;
			}
			this.outcomes.push( total );
		}
	}
}

export class DiceNodeModel {
	public children: DiceNodeModel[];

	constructor( public value: number,
				 public parent: DiceNodeModel,
				 public isLeaf = true ) {}

	public AddChild( value: number ) {
		if ( this.children === undefined ) {
			this.children = [];
		}

		this.isLeaf = false;

		const childNode = new DiceNodeModel( value, this );

		this.children.push( childNode );

		return childNode;
	}
}
