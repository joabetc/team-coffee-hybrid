import { Component} from '@angular/core';
import { FabContainer, ActionSheetController, AlertController } from 'ionic-angular';

@Component({
	selector: 'coffee-fab',
	templateUrl: './coffee-fab.template.html'
})
export class CoffeeFabComponent {

  constructor(
  	public actionSheetCtrl: ActionSheetController,
  	public alertCtrl: AlertController
  	) {}

  openMenu(fab: FabContainer) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Messages',
      cssClass: 'action-sheet-basic-page',
      buttons: [
        {
          text: 'I want coffee!',
          icon: 'add'
        },
        {
          text: 'Coffee is made!',
          icon: 'checkmark'
        },
        {
          text: 'Send a comment',
          icon: 'quote',
          handler: data => this.showPrompt()
        },
        {
          text: 'Cancel',
          icon: 'close'
        }
      ]
    });
    fab.close();
    actionSheet.present();
  }

  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Comment',
      message: "Enter your comment bellow",
      inputs: [
        {
          name: 'title',
          placeholder: 'Comment'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }
}