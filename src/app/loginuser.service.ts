import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class LoginuserService {
 private apiServerUrl=environment.apiBaseUrl;
// private apiServerUrl='http://localhost:9075/sysuser';
  constructor(private http: HttpClient) { }
  public loginUser(user: User): Observable<Object>{
   //console.log(user);
    return this.http.get<String>(`${this.apiServerUrl}/login/${user.userId}/${user.password}`);
  }
}