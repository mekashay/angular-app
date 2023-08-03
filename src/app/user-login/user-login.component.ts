import { Component, OnInit } from '@angular/core';
import { LoginuserService } from '../loginuser.service';
import { User } from '../user';
import {Router} from '@angular/router'
import { NgIf } from '@angular/common';
import { AngularMaterialModule } from '../angular-material.module';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
 message:String ='';
 rswitch:String ='0';
  constructor(private loginuserservice:LoginuserService, private routes:Router){};
   user:User=new User();
   
   public userLogin(){
    
    //console.log(this.user);
    this.loginuserservice.loginUser(this.user).subscribe(data=>{
    
     let role:string=data.toString();
      //this.rswitch=data.toString();
     
     //angular.equals(role,role1)
     if(role=="1")
    {
       this.routes.navigate(['/admin']);
      this.message='login successful now!';
 }else if(role=="2"){
  this.routes.navigate(['/business']);
   this.message='login successful now!';
  }
  else if(role=="3"){
  this.routes.navigate(['/main']);
   this.message='userId or  password may not be correct!';
 }else{
  this.routes.navigate(['/login']);
  this.message='login Failed , please try again!' 
 }
 return;
    },
    error=>{
        this.routes.navigate(['/login']);
        this.message='login Failed , please try again!' 
    });
   
    return;
   }
  
  ngOnInit(): void {
    
  }
  

}
