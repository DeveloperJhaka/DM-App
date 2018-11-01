import { Component } from '@angular/core';
import { GeneratorService } from '../shared/services/generator.service';
import { GeneratorDataModel } from '../shared/models/generator-data.model';

@Component({
	selector: 'app-generator',
	templateUrl: './generator.component.html',
	styleUrls: ['./generator.component.css']
})
export class GeneratorComponent {

	townName: GeneratorDataModel;
	townSize: GeneratorDataModel;
	inhabitants: GeneratorDataModel;
	atmosphere: GeneratorDataModel;
	feature: GeneratorDataModel;

	constructor( private generatorService: GeneratorService ) {	}

	generateTown() {
		this.townName = this.generatorService.townName();
		this.townSize = this.generatorService.townSize();
		this.inhabitants = this.generatorService.townInhabitants();
		this.atmosphere = this.generatorService.townAtmosphere();
		this.feature = this.generatorService.townFeature();
	}

	public formatRolls ( rolls: number[] ) {
		let rollOutput = '';

		for ( let i = 0; i < rolls.length; ++i ) {
			rollOutput += i > 0 ? ', ' + rolls[i] : rolls[i];
		}

		return '(' + rollOutput + ')';
	}

}
