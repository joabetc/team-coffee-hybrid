# team-coffee-hybrid

## What is this?

This is a hybrid mobile application developed by a group of team mates who enjoy a good cup of coffe.

## Purpose

Create an application that sends notifications to the participants in the coffee group, telling them who it is to bring the ingredients (coffee powder and sugar) or who it is to make the coffee.

## Main functionalities

* Push notifications:
  * to the next team mate scheduled to buy ingredients
  * to the next team mate scheduled to make coffee
* Send messages to other app users:
  * asking for coffee
  * notifying that the coffee was made

## Architecture

* Ionic 2
* Angular 2

## Techonologies

* TypeScript
* Ionic Cloud Auth
* Ionic Native

## Development

```
$ ionic start --v2 team-coffee-hybrid blank
$ cd team-coffee-hybrid
$ git init
$ git remote add origin https://github.com/joabetc/team-coffee-hybrid.git 
$ git fetch --all
$ git reset --hard origin/master 
```

```
$ npm install @ionic/cloud-angular --save
$ npm install @ionic-native/core --save
```