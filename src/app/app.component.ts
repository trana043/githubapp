import { Component, OnInit, Inject } from '@angular/core';
import { GithubInfoService } from './github-info.service';
import { GithubInfo } from './github-info';
import {SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'my github app';
  public sessionData: any = [];
  constructor(@Inject(SESSION_STORAGE) private sessionStorage: WebStorageService) {}

}
