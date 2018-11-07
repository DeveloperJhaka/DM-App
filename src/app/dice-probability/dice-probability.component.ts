import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { DiceTreeModel } from '../shared/models/dice-tree.model';
import {DiceRollOutcomeModel} from '../shared/models/dice-roll-outcome.model';

@Component({
	selector: 'app-dice-probability',
	templateUrl: './dice-probability.component.html',
	styleUrls: ['./dice-probability.component.css']
})
export class DiceProbabilityComponent implements AfterViewInit {
	@ViewChild( 'probCanvas' ) probCanvasRef: ElementRef;
	@ViewChild( 'canvasContainer' ) canvasContainerRef: ElementRef;
	public context: CanvasRenderingContext2D;
	width;
	height;
	public roll;
	public colors;
	public outcomes: DiceRollOutcomeModel[];
	chartType;

	constructor() {
		this.roll = [
			{ number: 1, die: 12 },
			{ number: 2, die: 6 },
			{ number: 3, die: 4 }
		];
		this.colors = [
			{ r: 255, g: 132, b:  99 },
			{ r:  99, g: 255, b: 132 },
			{ r:  99, g: 132, b: 255 }
		];
		this.chartType = 'bar';
	}

	ngAfterViewInit() {
		this.width = this.canvasContainerRef.nativeElement.offsetWidth;
		this.height = this.canvasContainerRef.nativeElement.offsetHeight * 4;

		this.probCanvasRef.nativeElement.width = this.width;
		this.probCanvasRef.nativeElement.height = this.height;
		this.probCanvasRef.nativeElement.style.width = this.width + 'px';
		this.probCanvasRef.nativeElement.style.height = this.height + 'px';

		this.context = (<HTMLCanvasElement>this.probCanvasRef.nativeElement).getContext('2d');
	}

	drawChart() {

		this.outcomes = [];
		const labels = [];
		const datasets = [];

		for ( let i = 0; i < this.roll.length; ++i ) {
			this.outcomes[i] = this.outcomesFromRoll( this.roll[i].number, this.roll[i].die );
		}

		for ( let i = 1; i <= this.roll[0].number * this.roll[0].die; ++i ) {
			labels.push( i );
		}

		for ( let i = 0; i < this.outcomes.length; ++i ) {
			datasets.push({
				label: this.outcomes[i].number + 'd' + this.outcomes[i].die,
				data: this.outcomes[i].outcomes,
				backgroundColor: 'rgba(' + this.colors[i].r + ',' + this.colors[i].g + ',' + this.colors[i].b + ',0.4)',
				borderColor: 'rgba(' + this.colors[i].r + ',' + this.colors[i].g + ',' + this.colors[i].b + ',1.0)',
				fill: this.chartType !== 'line',
				borderWidth: 1
			});
		}

		const chart = new Chart( this.context, {
			type: this.chartType,
			data: {
				labels: labels,
				datasets: datasets,
			},
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true,
						}
					}]
				}
			}
		});
	}

	outcomesFromRoll( number, die ): DiceRollOutcomeModel {
		const highestResult = number * die;
		const lowestResult = number;
		let results = [];
		const outcomes = [];

		const tree = new DiceTreeModel();
		const currentNode = tree.root;

		this.buildTree( currentNode, number, die );
		results = tree.getOutcomes();

		for ( let i = 0; i < highestResult; ++i ) {
			outcomes.push( 0 );
		}

		for ( let i = 0; i < results.length; ++i ) {
			outcomes[ results[i] - 1 ] += 1;
		}

		return new DiceRollOutcomeModel( number, die, lowestResult, highestResult, outcomes );
	}

	buildTree( node, number, die, level = 0 ) {
		if ( level < number ) {
			level++;
			for ( let i = 1; i <= die; ++i ) {
				const childNode = node.AddChild(i);
				this.buildTree( childNode, number, die, level );
			}
		}
	}

	calculatePercent( value, total ): string {
		const percent = value / total;
		return percent.toFixed( 2 ) + '%';
	}

	getColourStyle( index, alpha ) {
		return 'rgba(' + this.colors[ index ].r + ',' + this.colors[ index ].g + ',' + this.colors[ index ].b + ',' + alpha + ')';
	}
}
