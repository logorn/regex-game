import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { GamePage } from '../game/game';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	constructor(public navCtrl: NavController) {

	}

	newGame() {
		this.navCtrl.push(GamePage)
	}

}
