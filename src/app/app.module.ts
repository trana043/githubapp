import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { CommitDetailsComponent } from './commit-details/commit-details.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { StorageServiceModule } from 'angular-webstorage-service';

@NgModule({
  declarations: [
    AppComponent,
    CommitDetailsComponent,
    WelcomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StorageServiceModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'welcome', canActivate:[AuthGuardGuard],component: WelcomeComponent},
      {path: 'commitdetails/:username', component: CommitDetailsComponent},
      {path:'**', redirectTo:'welcome'}
    ], {useHash:true})
  ],
  providers: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
