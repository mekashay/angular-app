import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:String='mekashay';
  password:String='';
  logspinner:String='';
constructor(){}
ngOnInit(): void {
  
}
handleLogin():void{
  console.log(this.username);
  console.log(this.logspinner);
}
}
