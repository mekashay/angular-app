import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {User} from '../user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServerUrl=environment.apiBaseUrl;
  //private apiServerUrl:'http://localhost:9075/sysuser';

  constructor(private http: HttpClient) {}
  public getAllUser(): Observable<User[]>{
    return this.http.get<User[]>(`${this.apiServerUrl}/getAllSysUsers`);
  }
  public getUserById(userId:number):Observable<User>{
    return this.http.get<User>(`${this.apiServerUrl}/getUserByUserId/${userId}`);
  }
 public addUser(user:User):Observable<User>{
  return this.http.post<User>(`${this.apiServerUrl}/addUser`, user);
 }
 public updateUser(user: User): Observable<User>{
  return this.http.put<User>(`${this.apiServerUrl}/updateUser`, user);
 }
 public deleteUser(Id:number): Observable<void>{
  return this.http.delete<void>(`${this.apiServerUrl}/deleteUser/${Id}`);
 }
 
}
