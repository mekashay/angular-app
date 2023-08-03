import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppHeaderComponent } from './app-header/app-header';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
//import { ProductService } from './product.service';
import { SidebarModule } from 'ng-sidebar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppToolbarComponent } from './toolbar/app.toolbar.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LogheaderComponent } from './logheader/logheader.component';
import { HomeComponent } from './home/home.component';
import { AppMainComponent } from './main/main.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ErrorComponent } from './error/error.component';
import { IjaraContComponent } from './ijaracont/ijaracont.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AppHeaderComponent,
    AppToolbarComponent,
    AppMainComponent,
    SidenavComponent,
    LogheaderComponent,
    HomeComponent,
    UserLoginComponent,
    ErrorComponent,
    IjaraContComponent,
    UserComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    SidebarModule.forRoot(),
    MatSidenavModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    MatCardModule,
    MatInputModule,
    AngularMaterialModule,
    MatSidenavModule
    
     ],
  providers: [],
  bootstrap: [AppComponent,AppMainComponent,AppHeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
