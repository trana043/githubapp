import { Component, OnInit } from '@angular/core';
import { GithubInfoService } from '../github-info.service';
import { GithubInfo } from '../github-info';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  searchUser:string = '';
  constructor (private githubInfoService: GithubInfoService){}
  displayInfo: GithubInfo[];
  user: string;
  ngOnInit(): void {
    this.user = sessionStorage.getItem('user');
    this.githubInfoService.getUsers('?per_page=10').subscribe({
      next: result => {this.displayInfo=result;console.log(result)}
    }
    );
  }
  onChange(): void {
    this.githubInfoService.getUsers("/"+this.searchUser).subscribe({
      next: product=> { this.displayInfo = product;}
  });
  }
}
