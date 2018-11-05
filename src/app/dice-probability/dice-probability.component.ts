import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

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

	constructor() { }

	ngAfterViewInit() {
		this.width = this.canvasContainerRef.nativeElement.offsetWidth;
		this.height = this.canvasContainerRef.nativeElement.offsetHeight * 4;

		this.probCanvasRef.nativeElement.width = this.width;
		this.probCanvasRef.nativeElement.height = this.height;
		this.probCanvasRef.nativeElement.style.width = this.width + 'px';
		this.probCanvasRef.nativeElement.style.height = this.height + 'px';

		this.context = (<HTMLCanvasElement>this.probCanvasRef.nativeElement).getContext('2d');

		this.drawChart();
	}

	drawChart() {

		const outcomes = this.outcomesFromRoll( 3, 6 );

		const chart = new Chart( this.context, {
			type: 'bar',
			data: {
				labels: outcomes,
				datasets: [{
					label: '# of Votes',
					data: outcomes,
					borderWidth: 1
				}]
			},
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true
						}
					}]
				}
			}
		});
	}

	outcomesFromRoll( number, die ): number[] {
		const results = [];
		const highestResult = number * die;
		const lowestResult = number;
		const numOutcomes = highestResult - lowestResult + 1;
		const outcomes = [];

		console.log( 'for ' + number + 'd' + die + ' there are ' + numOutcomes + ' potential outcomes' );
		console.log( 'the lowest value will be ' + lowestResult );
		console.log( 'the highest value will be ' + highestResult );

		for ( let k = 1; k <= die; ++k ) {
			console.log( 'die: ' + k );
			for ( let j = 1; j <= number; ++j ) {
				for ( let i = 1; i <= die; ++i ) {
					console.log( 'result: ' + ( i + k ));
					results.push( i + k );
				}
			}
		}

		for ( let i = 0; i < numOutcomes; ++i ) {
			outcomes.push( 0 );
		}

		for ( let i = 0; i < results.length; ++i ) {
			outcomes[ results[i] ] += 1;
		}

		for ( let i = 0; i < numOutcomes; ++i ) {
			console.log( i + ': ' + outcomes[i] );
		}

		return outcomes;
	}
}
