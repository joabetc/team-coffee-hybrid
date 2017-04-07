import { Component } from '@angular/core';

import { NavController, AlertController, LoadingController } from 'ionic-angular';

import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';

import { HomePage } from '../home/home';

@Component({
  selector: 'login-page',
  templateUrl: 'login.html'
})
export class LoginPage {

  showLogin: boolean = true;

  name: string;
  pass: string;
  email: string;

  constructor(
    public navCtrl: NavController, 
    public auth:Auth, 
    public user: User, 
    public alertCtrl: AlertController, 
    public loadingCtrl:LoadingController
  ) {}

  signUp() {

    if (!this.showLogin) {

      if (this.name === '' || this.email === '' || this.pass === '') {
        let alert = this.alertCtrl.create(
          {
            title: 'Register Error',
            subTitle: 'All fields are required',
            buttons: ['Ok']
          }
        );
        alert.present();
        return;
      }

      let details: UserDetails = {
        'name': this.name,
        'email': this.email,
        'password': this.pass
      };

      let loader = this.loadingCtrl.create(
        {
          content: "Registering your account..."
        }
      )
      loader.present();

      this.auth.signup(details).then(() => {
        this.auth.login('basic', {'email':details.email, 'password':details.password}).then(() => {
            loader.dismissAll();
            this.navCtrl.setRoot(HomePage);
          });
      }, (err: IDetailedError<string[]>) => {
        loader.dismissAll();
        let errors = '';
        for (let e of err.details) {
          console.log(e);
          if(e === 'required_email') errors += 'Email is required.<br/>';
          if(e === 'required_password') errors += 'Password is required.<br/>';
          if(e === 'conflict_email') errors += 'A user with this email already exists.<br/>';
          if(e === 'invalid_email') errors += 'Your email address isn\'t valid.';
        }

        let alert = this.alertCtrl.create(
          {
            title: 'Register Error',
            subTitle: errors,
            buttons: ['Ok']
          }
        );

        alert.present();
      });
    } else {
      this.showLogin = false;
    }
  }

  doLogin() {
    if (this.showLogin) {
      if (this.email === '' || this.pass === '') {
        let alert = this.alertCtrl.create(
          {
            title: 'Register Error',
            subTitle: 'All fields are required',
            buttons: ['Ok']
          }
        );
        alert.present();
        return;
      }

      let loader = this.loadingCtrl.create(
        {
          content: "Logging in..."
        }
      );
      loader.present();

      this.auth.login('basic', {'email': this.email, 'password': this.pass}).then(() => {
        loader.dismissAll();
        this.navCtrl.setRoot(HomePage);
      }, (err) => {
        loader.dismissAll();

        let errors = '';

        if (err.message === 'UNPROCESSABLE ENTITY')
          errors += 'Email isn\'t valid.<br/>';
        if (err.message === 'UNAUTHORIZED')
          errors += 'Password is required.<br/>';
        
        let alert = this.alertCtrl.create(
          {
            title: 'Login Error',
            subTitle: errors,
            buttons: ['Ok']
          }
        );
        alert.present();
      });
    } else {
      this.showLogin = true;
    }
  }

}