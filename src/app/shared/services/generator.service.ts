import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DiceService } from './dice.service';
import { EventsService } from './events.service';
import {GeneratorDataModel} from '../models/generator-data.model';

@Injectable()
export class GeneratorService {
	files = [
		{
			index: 0,
			name: 'settlement_start',
			filename: 'settlement_start.json',
			data: undefined
		},
		{
			index: 1,
			name: 'settlement_end',
			filename: 'settlement_end.json',
			data: undefined
		},
		{
			index: 2,
			name: 'settlement_size',
			filename: 'settlement_size.json',
			data: undefined
		},
		{
			index: 3,
			name: 'settlement_inhabitants',
			filename: 'settlement_inhabitants.json',
			data: undefined
		},
		{
			index: 4,
			name: 'settlement_atmosphere',
			filename: 'settlement_atmosphere.json',
			data: undefined
		},
		{
			index: 5,
			name: 'settlement_feature',
			filename: 'settlement_feature.json',
			data: undefined
		},
    {
      index: 6,
      name: 'settlement_interest',
      filename: 'settlement_interest.json',
      data: undefined
    },
    {
      index: 7,
      name: 'resource_type',
      filename: 'resource_type.json',
      data: undefined
    },
    {
      index: 8,
      name: 'foodsource_type',
      filename: 'foodsource_type.json',
      data: undefined
    },
	];

	fileCount;
	filesLoaded = 0;
	allFilesLoaded = false;

	constructor( public http: HttpClient,
				 private diceService: DiceService,
				 private eventsService: EventsService ) {
		this.fileCount = this.files.length;

		this.files.forEach( file => {
			this.http.get( '../../../assets/tables/' + file.filename )
				.subscribe( data => {
					file.data = data;

					this.eventsService.fileLoaded.emit();
				}
			);
		});

		this.eventsService.fileLoaded.subscribe( () => {
			this.filesLoaded++;

			if ( this.filesLoaded === this.fileCount ) {
				this.allFilesLoaded = true;
			}
		});
	}

	public townName(): GeneratorDataModel {
		if ( !this.allFilesLoaded ) {
			return undefined;
		}

		let startIndex, endIndex;
		let startString, endString;

		this.files.forEach( file => {
			if ( file.name === 'settlement_start' ) {
				startIndex = this.diceService.roll( 1, file.data.count );
				startString = file.data[ startIndex ];
			}

			if ( file.name === 'settlement_end' ) {
				endIndex = this.diceService.roll( 1, file.data.count );
				endString = file.data[ endIndex ];
			}
		});

		if ( startString[ startString.length - 2 ] === '\'' ) {
			startString += ' ';
			endString = endString.charAt(0).toUpperCase() + endString.substr(1);
		}

		if ( startString[ startString.length - 1 ] === endString[ 0 ] ) {
			startString += '-';
		}

		return new GeneratorDataModel( startString + endString, [ startIndex, endIndex ]);
	}

	public townSize(): GeneratorDataModel {
		if ( !this.allFilesLoaded ) {
			return undefined;
		}

		let sizeIndex;
		let sizeString = '';

		this.files.forEach( file => {
			if ( file.name === 'settlement_size' ) {
				sizeIndex = this.diceService.roll( 1, file.data.count );
				sizeString = file.data[ sizeIndex ];
			}
		});

		return new GeneratorDataModel( sizeString, [ sizeIndex ]);
	}

	public townInhabitants(): GeneratorDataModel {
		if ( !this.allFilesLoaded ) {
			return undefined;
		}

		let inhabitantsIndex;
		let inhabitantsString = '';

		this.files.forEach( file => {
			if ( file.name === 'settlement_inhabitants' ) {
				inhabitantsIndex = this.diceService.roll( 1, file.data.count );
				inhabitantsString = file.data[ inhabitantsIndex ];
			}
		});

		return new GeneratorDataModel( inhabitantsString, [ inhabitantsIndex ]);
	}

	public townAtmosphere(): GeneratorDataModel {
		if ( !this.allFilesLoaded ) {
			return undefined;
		}

		let atmosphereIndex;
		let atmosphereString = '';

		this.files.forEach( file => {
			if ( file.name === 'settlement_atmosphere' ) {
				atmosphereIndex = this.diceService.roll( 1, file.data.count );
				atmosphereString = file.data[ atmosphereIndex ];
			}
		});

		return new GeneratorDataModel( atmosphereString, [ atmosphereIndex ]);
	}

	public townFeature(): GeneratorDataModel {
		if ( !this.allFilesLoaded ) {
			return undefined;
		}

		let featureIndex;
		let featureString = '';

		this.files.forEach( file => {
			if ( file.name === 'settlement_feature' ) {
				featureIndex = this.diceService.roll( 1, file.data.count );
				featureString = file.data[ featureIndex ];
			}
		});

		return new GeneratorDataModel( featureString, [ featureIndex ]);
	}

  public townInterest(): GeneratorDataModel {
    if ( !this.allFilesLoaded ) {
      return undefined;
    }

    let featureIndex;
    let featureString = '';

    this.files.forEach( file => {
      if ( file.name === 'settlement_interest' ) {
        featureIndex = this.diceService.roll( 1, file.data.count );
        featureString = file.data[ featureIndex ];
      }
    });

    return new GeneratorDataModel( featureString, [ featureIndex ]);
  }

	public townResource(): GeneratorDataModel {
	  if ( !this.allFilesLoaded ) {
	    return undefined;
    }

    let resourceIndex;
	  let resourceString = '';

	  this.files.forEach( file => {
	    if ( file.name === 'resource_type' ) {
	      resourceIndex = this.diceService.roll( 1, file.data.count );
	      resourceString = file.data[ resourceIndex ];
      }
    });

	  return new GeneratorDataModel( resourceString, [ resourceIndex ]);
  }

  public townFoodSource(): GeneratorDataModel {
    if ( !this.allFilesLoaded ) {
      return undefined;
    }

    let resourceIndex;
    let resourceString = '';

    this.files.forEach( file => {
      if ( file.name === 'foodsource_type' ) {
        resourceIndex = this.diceService.roll( 1, file.data.count );
        resourceString = file.data[ resourceIndex ];
      }
    });

    return new GeneratorDataModel( resourceString, [ resourceIndex ]);
  }
}
