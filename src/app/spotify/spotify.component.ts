import { Component } from '@angular/core';

@Component({
	selector: 'app-spotify',
	templateUrl: './spotify.component.html',
	styleUrls: ['./spotify.component.css']
})
export class SpotifyComponent {
	spotify_playlists = [
		{
			type: 'Ambience',
			playlists: [
				{
					name: 'Ambient: Cavern',
					image: '0839cc7561e3b70429db917f07dd2f76b1db05d2',
					url: '7cgECSzxFYwjHugNdbur1O'
				},
				{
					name: 'Ambient: Forest',
					image: '82aed649e374e73e16f1d58a65a0aba4804d7cc0',
					url: '5ayvxbK8CveLIj4llcibs2'
				},
				{
					name: 'Ambient: Mountain Pass',
					image: '3142e9d31b30154a861fc52bb9b366a94175a33f',
					url: '4y88W8yD8M32PJ4ZNJVzAp'
				},
				{
					name: 'Ambient: Mystical',
					image: 'd753a46be318cdbdbff58699209fe6ec213a06c8',
					url: '47JbzbE2fpng1VU0VeufGU'
				},
				{
					name: 'Ambient: Ocean',
					image: 'b2652a2690ce6601a06d4d14732c6836216b1290',
					url: '0czhzWKJ1qoC9iHH5yN93a'
				},
				{
					name: 'Ambient: Storm',
					image: '83943d1c54f33c49913c82b46c37269ce62c3e52',
					url: '3lQ1VrIoMDHJmw52N3uAEc'
				},
			]
		},
		{
			type: 'Atmosphere',
			playlists: [
				{
					name: 'Atmosphere: The Capital',
					image: '9257cda74e5de34a2b54ff72813e34a27b47bc6f',
					url: '2t5TWAPs6HYuJ3xbpjHYpx'
				},
				{
					name: 'Atmosphere: The Cathedral',
					image: '16063f7aa8681abaddae4daa16b29d33c5c02f0c',
					url: '0IyMP3izyM2jbYgJLydB00'
				},
				{
					name: 'Atmosphere: The Desert',
					image: 'de375cce3448be481f9efa650e02c44e6e7dd127',
					url: '4yguXksZpqOW10hpuDyB5A'
				},
				{
					name: 'Atmosphere: The Dungeon',
					image: 'ce3286d23c4464f63f26877f699b9d66bacbb3fe',
					url: '64UCYVCIPtZiOP2zEodORk'
				},
				{
					name: 'Atmosphere: The Fey',
					image: '2880fb823ac34de3d829159a49dbf251d9a55ee2',
					url: '4jPscCOA5zrheXibHnmlU1'
				},
				{
					name: 'Atmosphere: The Manor',
					image: 'c34f86d1f3ec079f009b9ccf0e5e3fde233fd41c',
					url: '6QzZjlzHxNUo9N6E19RKpJ'
				},
				{
					name: 'Atmosphere: The Road',
					image: 'd4e0b10e9c09bb25773b42497a4ae0ab6d933717',
					url: '0gZQWj0PjC6t2bgmroHaaW'
				},
				{
					name: 'Atmosphere: The Saloon',
					image: 'fc4fca458ce4e5dd08eaed6eb874227fab9f9fbf',
					url: '73YmiE2tLNG5VbNF7oGmSn'
				},
				{
					name: 'Atmosphere: The Tavern',
					image: '80341e211dd1798515d1a9ea31f9d88681174f82',
					url: '2StSwZk9mV2DNO3aucMZYx'
				},
				{
					name: 'Atmosphere: The Town',
					image: 'b39c816ee3479dcb60412cc0d66fbe08ba4a770e',
					url: '5GgU8cLccECwAvjDCGhYjj'
				},
				{
					name: 'Atmosphere: The Underdark',
					image: '70f437f33358f57c3215f4a54cfeef705deee832',
					url: '5Qhtamj9NCxluijLnQ4edN'
				},
				{
					name: 'Atmosphere: The Wild',
					image: '35dd358fc4321c108c67c22e92c1437e466f3eaa',
					url: '5r2AkNQOITXRqVWqYj40QG'
				},
			]
		},
		{
			type: 'Campaign',
			playlists: [
				{
					name: 'Eye of The All-Father',
					image: 'f7499194ad0809eb2ccd708cc2bd9569bce9b926',
					url: '3sta8W5YmT3BY2LF8sPvb1'
				},
				{
					name: 'Maelstrom',
					image: '962ec1c6e72598bde5d4f93999b4b47df61a5734',
					url: '3dxUEDvJdWtaQWRJgKCESl'
				},
			]
		},
		{
			type: 'Combat',
			playlists: [
				{
					name: 'Combat: Boss',
					image: 'ad4145df289d331e6ad8373f8c13afec2fccc9ea',
					url: '0Q6hJZYIEu3LwbyBBHjjHo'
				},
				{
					name: 'Combat: Duel',
					image: 'cf3f4e45b26d9fe78285194d72dff7f04a862b85',
					url: '5g9ZZ9Ogml8NsjOlv8N31t'
				},
				{
					name: 'Combat: Epic',
					image: '405b92b3ddaea9fc2afac463f16713379d68753c',
					url: '4Anyq806DQpd7pRZbSADUr'
				},
				{
					name: 'Combat: Horrifying',
					image: '5812f1c20612ffb976a50226accd9e786542fbb8',
					url: '1SbeUQZbRHyUEIr6wsoD4q'
				},
				{
					name: 'Combat: Standard',
					image: '4fda960df5e4916060d7f9cf4ac9f58b22c0eef5',
					url: '0bWUBjlr7O4troJKyyMVbD'
				},
				{
					name: 'Combat: Tough',
					image: '636a47c1c5ef7464896186f212ce1ba64a3b6516',
					url: '6T0UOAmlbWb29y2fIETtL2'
				},
			]
		},
		{
			type: 'Monsters',
			playlists: [
				{
					name: 'Monsters: Aberrations',
					image: '4d795787e86767b7b47ca3e68e2a5392ec9ac39b',
					url: '1IIfebxUOYAeOD2Aqvw7Rj'
				},
				{
					name: 'Monsters: Beasts',
					image: 'e6f2bebee9a57b5d5854620cddd78f19225d4393',
					url: '6XslTVSeiQr80Gu79vnfXZ'
				},
				{
					name: 'Monsters: Dragons',
					image: '173782a354bc1527250fb0c1b4e4361c35f36271',
					url: '1qvLig9ELPmb8bcVPutk9M'
				},
				{
					name: 'Monsters: Giants',
					image: 'fb69a7967c6ee288862c79bd3ebf8c5048a4b17d',
					url: '6U68RdBoCkZFNWBXhQ4KXH'
				},
				{
					name: 'Monsters: Goblins',
					image: '5c7682f314c9d03a5bb17b064520854eab896f2d',
					url: '58lGIqHs8HSmcYoKW7gBE3'
				},
				{
					name: 'Monsters: Hags',
					image: 'cc615012c44344a6dcfab4d8b59744f9998ad4a2',
					url: '4k1no9mrUph4rkFI1bEFJT'
				},
				{
					name: 'Monsters: Orcs',
					image: 'faf2468c84390eae2cf1edd57a6c18c735385b6c',
					url: '46NfO4PokCdGvm6Fkbtx9u'
				},
				{
					name: 'Monsters: Tribesmen',
					image: 'ad69db46d1db77c2f59daa966f0ff5c78e9f6425',
					url: '2crzs0lic8x58JyPZM8k3v'
				},
				{
					name: 'Monsters: Undead',
					image: 'eec2d9517d2335f34a99a4acf56664d50b81147e',
					url: '49PvqjRs9c4lgyvdOI4Lvd'
				},
			]
		},
		{
			type: 'Mood',
			playlists: [
				{
					name: 'Mood: Creepy',
					image: 'bd7efbd8378e5a42621818e39770fb6b8be8c400',
					url: '6nSstCQcmzcEUSx8gBrcek'
				},
				{
					name: 'Mood: Denouement',
					image: 'ecbdc0ef22809d31855ab33829b050b7bf097e6a',
					url: '71AETM4dyul7BDNYE9zVBv'
				},
				{
					name: 'Mood: Joyful',
					image: '274fc2906315b849f76e69c17353fff3a0c4681d',
					url: '6KbY8nK4vdGO0zaSuoXEFr'
				},
				{
					name: 'Mood: Mysterious',
					image: '0b647f90d00488135a9fc08c8bd5c08605598327',
					url: '28ICiQDK37yaahRZD7aX3J'
				},
				{
					name: 'Mood: Ominous',
					image: '60c89dd51778c8759acddc97017c7c80af09984e',
					url: '71yNeiFbb8bDhgLIzu9eae'
				},
				{
					name: 'Mood: Pleasant',
					image: '917b7039690190a64670755667295b471b6eb064',
					url: '3O4DGo9DS5kzUUJo6EQYdp'
				},
				{
					name: 'Mood: Ridiculous',
					image: '03700e767830774dcabcfcc652ed0ba1ee243f56',
					url: '3VepfFpcPxHIL7WyKYFdGI'
				},
				{
					name: 'Mood: Serious',
					image: 'eb4861899786e6eea51555183d3a636ee76cfc90',
					url: '3LNrO4Jvwtzk2QD1gR8ccZ'
				},
				{
					name: 'Mood: Somber',
					image: '5c9f44bccf91cbe23fd90a8dd0082b223e0094bb',
					url: '5N5w6WFXigWqZMLzVo6rdh'
				},
				{
					name: 'Mood: Tense',
					image: '401a065cc094791380d75565063d3ba569b211a7',
					url: '4DYALPIektzP4vVdZFlHNe'
				},
				{
					name: 'Mood: Triumphant',
					image: '8343d25161a07e28b1d06c57b9c2c345b0c1b4db',
					url: '1ALzSDT8MfYQ7Xams9Nx16'
				},
			]
		},
		{
			type: 'Sea Shanties',
			playlists: [
				{
					name: 'Sea Shanties',
					image: '4400567db00b1f688033564d8e0eb8ff5f7a7e57',
					url: '3p22aU2NEvY8KErZAoWSJD'
				}
			]
		},
		{
			type: 'Setting',
			playlists: [
				{
					name: 'Setting: Barovia',
					image: '61ac525f0b6ba8078cfe1d9dd7559d7694697337',
					url: '1Pw2cdOxeDBgIsocUWQYyD'
				},
				{
					name: 'Setting: Chult',
					image: 'f173a35ca63d7466339cdaf392723ede2343eab7',
					url: '4OfzULWGbFp4ohUoYuRvJh'
				},
				{
					name: 'Setting: Cyberpunk',
					image: 'e1aeb0238feaff4216daf8d6742644b1803dd876',
					url: '3q2iJdKM6MqKkZoRKMtti4'
				},
			]
		},
		{
			type: 'Situation',
			playlists: [
				{
					name: 'Situation: Chase',
					image: 'fc41674301ecf68f23ce2ec672cd2645b2419dcd',
					url: '1TXWTHKaWNQij6K9Ldn6fU'
				},
				{
					name: 'Situation: Stealth',
					image: 'f495a617e7651e795413b4e961cf10822690612c',
					url: '6GdFG0fgrJLSXSlEkF6iM0'
				},
			]
		}
	];

	constructor() { }

	gotoAnchor( id ) {
		const anchor = document.querySelector( '#' + id );

		if ( anchor ) {
			anchor.scrollIntoView();
		}
	}
}
