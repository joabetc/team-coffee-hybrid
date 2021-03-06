import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Ranking } from '../../app/components/ranking/ranking';
import { Messages } from '../../app/components/messages/messages';
import { CoffeeFab } from '../../app/components/coffee-fab/coffee-fab';
import { Auth, User } from '@ionic/cloud-angular';
import { LoginPage } from '../login/login';

const RANKING: Ranking[] = [
    {
      name: 'Wagner',
      last_coffee: '1 min',
      icon: 'trophy',
      icon_color: 'gold'
    },
    {
      name: 'Flávia',
      last_coffee: '2 days',
      icon: 'medal',
      icon_color: 'gold'
    },
    {
      name: 'Alison',
      last_coffee: '1 day',
      icon: 'medal',
      icon_color: 'silver'
    },
    {
      name: 'Josivan',
      last_coffee: '1 min',
      icon: 'medal',
      icon_color: 'bronze'
    }
  ];

const MESSAGES: Messages[] = [
  {
    message: 'Coffee is made!',
    author: 'by Wagner',
    when: '1 min ago'
  },
  {
    message: 'What a disgusting coffee!',
    author: 'by Josivan',
    when: '2 hours ago'
  },
  {
    message: 'Need to buy sugar!',
    author: 'by Flavia',
    when: '3 days ago'
  },
  {
    message: 'Need to buy coffee pouder!',
    author: 'by Wagner',
    when: '1 week ago'
  }
];

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  ranking = RANKING;
  messages = MESSAGES;

  public color: string = 'primary';
  public position: string = 'right';
  public icon: string = 'cart';
  public enableBackdropDismiss: boolean = true;
  public buttonColor: string = 'light';

  constructor(
    public navCtrl: NavController, 
    public user: User,
    public auth: Auth
    ) { }

  public buttons =  [
    {
      icon: 'add',
      title: 'Sugar',
      color: this.buttonColor,
      handler: ()=> {
        //this.presentToast('Dont close on click');
      }
    },
    {
      icon: 'add',
      title: 'Paper',
      color: this.buttonColor,
      handler: ()=> {
        //this.presentToast('Dont close on click');
      }
    },
    {
      icon: 'add', 
      title: 'Coffee',
      color: this.buttonColor,
      handler: ()=> {
        //this.presentToast('Close on click');
      }
    },
    {
      title: 'Bought',
      color: this.buttonColor,
      handler: ()=> {
        //this.presentToast('Dont close on click');
      }
    }
  ];

  logout() {
    this.auth.logout();
    this.navCtrl.setRoot(LoginPage);
  }
}
