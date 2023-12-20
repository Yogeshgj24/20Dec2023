import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyFirstProj';
  MyFriend1 = "Kirubakaran";
  MyFriend2 =  "Praksh";
  MyFriend3 = "Dharshini";
  MyFriend4 = "Tejaswini";

  constructor(){
    var fname = "Afreen";
    

    var fname1 : string = "Dhanush";
    var Marks : number = 100;

    console.log("fname="+fname);
    console.log("fname="+fname1);


  }

  
}
