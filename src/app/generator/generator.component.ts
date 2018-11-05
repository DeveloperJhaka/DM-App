import { AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import { GeneratorService } from '../shared/services/generator.service';
import { GeneratorDataModel } from '../shared/models/generator-data.model';
import { DiceService } from '../shared/services/dice.service';
import { TownLocationModel } from '../shared/models/town-location.model';

@Component({
	selector: 'app-generator',
	templateUrl: './generator.component.html',
	styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements AfterViewInit {
	@ViewChild( 'townCanvas' ) townCanvasRef: ElementRef;
	@ViewChild( 'canvasContainer' ) canvasContainerRef: ElementRef;
	public context: CanvasRenderingContext2D;
	townName: GeneratorDataModel;
	townSize: GeneratorDataModel;
	inhabitants: GeneratorDataModel;
	atmosphere: GeneratorDataModel;
	feature: GeneratorDataModel;
	interest: GeneratorDataModel;
	resources: GeneratorDataModel[];
	foodSources: GeneratorDataModel[];
	locations: TownLocationModel[];

	private width;
	private height;

	constructor( private generatorService: GeneratorService,
				 private diceService: DiceService ) {	}

	ngAfterViewInit() {
		this.width = this.canvasContainerRef.nativeElement.offsetWidth;
		this.height = this.canvasContainerRef.nativeElement.offsetHeight * 2;

		this.townCanvasRef.nativeElement.width = this.width;
		this.townCanvasRef.nativeElement.height = this.height;
		this.townCanvasRef.nativeElement.style.width = this.width + 'px';
		this.townCanvasRef.nativeElement.style.height = this.height + 'px';

		this.context = (<HTMLCanvasElement>this.townCanvasRef.nativeElement).getContext('2d');
	}

	generateTown() {
		this.townName = this.generatorService.townName();
		this.townSize = this.generatorService.townSize();
		this.inhabitants = this.generatorService.townInhabitants();
		this.atmosphere = this.generatorService.townAtmosphere();
		this.feature = this.generatorService.townFeature();
		this.interest = this.generatorService.townInterest();

		this.locations = [];
		this.context.clearRect(0, 0, this.townCanvasRef.nativeElement.width, this.townCanvasRef.nativeElement.height);

		this.generateResources();
		this.generateFoodSources();
		this.generateLocations();
	}

	generateResources() {
		this.resources = [];
		const total = this.diceService.roll( 1, 4 );

		for ( let i = 0; i < total; ++i ) {
			this.resources.push( this.generatorService.townResource() );
		}
	}

	generateFoodSources() {
		this.foodSources = [];
		const total = this.diceService.roll( 1, 4 );

		for ( let i = 0; i < total; ++i ) {
			this.foodSources.push( this.generatorService.townFoodSource() );
		}
	}

	generateLocations() {
		this.locations = [];
		const locationCount = this.diceService.roll( this.townSize.rolls[0], 4 );

		for ( let i = 1; i <= locationCount; ++i ) {
			const padding = 16;
			const xMax = this.width - ( 2 * padding );
			const yMax = this.height - ( 2 * padding );
			const x = Math.floor(Math.random() * xMax ) + 1 + padding;
			const y = Math.floor(Math.random() * yMax ) + 1 + padding;

			this.locations.push( new TownLocationModel( i - 1, 'name_of_location', x, y ));
			this.DrawLocation( i, x, y );
		}
	}

	public formatRolls ( rolls: number[] ) {
		let rollOutput = '';

		for ( let i = 0; i < rolls.length; ++i ) {
			rollOutput += i > 0 ? ', ' + rolls[i] : rolls[i];
		}

		return '(' + rollOutput + ')';
	}

	private DrawLocation( index, x, y ) {
		const radius = 8;

		this.context.beginPath();
		this.context.arc( x, y, radius, 0, Math.PI * 2 );
		this.context.stroke();

		const xOffset = index < 10 ? 3 : 6;
		const yOffset = 3;
		this.context.fillText( index.toString(), x - xOffset, y + yOffset );
	}
}
