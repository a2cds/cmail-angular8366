import { Component } from "@angular/core";
import { Email } from './models/email';

@Component({
  selector:'app-root',
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.css']
})

export class AppComponent {
  //title = "cmail";
  private _isNewEmailFormOpen = false;

  email:Email = new Email();

  get isNewEmailFormOpen(){
    return this._isNewEmailFormOpen;
  }

  set isNewEmailFormOpen(value){
    this._isNewEmailFormOpen = value;
  }

  toggleNewEmailForm(){
    this._isNewEmailFormOpen = !this.isNewEmailFormOpen;
  }

  handleNewEmail(event: Event){
    event.preventDefault();
    console.log(this.email);
  

  }
}