import { Component, OnInit } from '@angular/core';
import { Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

import { User } from './services/user.class';
import { UserService } from './services/user.service';

import { Auth } from '@ionic/cloud-angular';

@Component({
  templateUrl: 'app.html',
  providers: [UserService, SplashScreen]
})
export class MyApp implements OnInit {
  rootPage;
  
  users: User[];

  constructor(
    platform: Platform, 
    private userService: UserService, 
    public auth: Auth,
    private splashScreen: SplashScreen
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      splashScreen.hide();

      if (this.auth.isAuthenticated()) {
        this.rootPage = HomePage;
      } else {
        this.rootPage = LoginPage;
      }
    });
  }

  getUsers(): void {
    this.userService.getUsers().then(users => this.users = users);
  }

  ngOnInit(): void {
    //this.getUsers();
  }
}
