import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import  { User} from '../user';
import { HttpErrorResponse } from '@angular/common/http';
//import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
//import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  //styleUrls: ['../assets/style.css']
  styleUrls: ['../../assets/style.css']
})
export class UserComponent  implements OnInit{

  public users: User[] ;
  public updateUser:User;
  public deleteUser:User;
  public _opened: boolean = false;

  public _toggleSidebar() {
    this._opened = !this._opened;
  }

  constructor(private userService: UserService) {}
  ngOnInit() {
    this.getAllUser();
  }
  public getAllUser():void {
    
    this.userService.getAllUser().subscribe(
      (response:User[])=>{
        this.users = response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );

    }
    
    public onAddUser(addForm:NgForm):void{
    this.userService.addUser(addForm.value).subscribe(
      (response:User)=>{
      console.log(response);
      this.getAllUser();
      },
      
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
        
      
    );
    }
    public onUpdateUser(updateForm:NgForm):void{
      console.log(updateForm.value);
      this.userService.updateUser(updateForm.value).subscribe(
        (response:User)=>{
          console.log(response);
          this.getAllUser();
          },
          
          (error:HttpErrorResponse)=>{
            alert(error.message);
          }

      )
    }
    public onDeleteUser(id:number):void{
      this.userService.deleteUser(id).subscribe(
       (response:void)=>{
        console.log(response);
        this.getAllUser();
       },
        (error:HttpErrorResponse)=>{
          alert(error.message);
        }
      )

    }
    public searchUsers(key:string):void{
     // console.log("key value: "+key);
      const results:User[]=[];
      for(const user of this.users)
      {
        console.log(user.userStatus);
        if((user.userId||"").toLowerCase().indexOf(key.toLowerCase())!==-1||
        (user.email||"").toLowerCase().indexOf(key.toLowerCase())!==-1||
        (user.userStatus||"").toLowerCase().indexOf(key.toLowerCase())!==-1||
        (user.loginStatus||"").toLowerCase().indexOf(key.toLowerCase())!==-1||
        (user.role||"").toLowerCase().indexOf(key.toLowerCase())!==-1
        /*||
        user.role.toLowerCase().indexOf(key.toLowerCase())!==-1||
       user.userStatus.toLowerCase().indexOf(key.toLowerCase())!==-1||
        user.loginStatus.toLowerCase().indexOf(key.toLowerCase())!==-1*/
       )
        {
          results.push(user);
        }
      }
      this.users=results;
      if(results.length==0||!key)
      {
        this.getAllUser();
      }
    }
    public onOpenModal(user:User,mode:string):void { 
      const container=document.getElementById('main-container');
      const button=document.createElement('button');
      button.type='button';
      button.style.display='none';
      button.setAttribute('data-toggle', 'modal');

      if(mode ==='add'){
        button.setAttribute('data-target','#addUserModal');
      }
      if(mode ==='edit'){
        this.updateUser=user;
        button.setAttribute('data-target','#updateUserModal');
      }
      if(mode ==='delete'){
       this.deleteUser=user;
        button.setAttribute('data-target','#deleteUserModal');
      }
      container.appendChild(button);
      button.click();

    }
 
}

