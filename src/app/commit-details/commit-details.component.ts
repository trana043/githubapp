import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubInfoService } from '../github-info.service';
import { RepoInfo } from '../repo-info';

@Component({
  selector: 'app-commit-details',
  templateUrl: './commit-details.component.html',
  styleUrls: ['./commit-details.component.css']
})
export class CommitDetailsComponent implements OnInit {
  info: RepoInfo[];
  constructor(private route: ActivatedRoute, private http: GithubInfoService, private router: Router) { 
    console.log(this.route.snapshot.paramMap)
  }

  ngOnInit() {
    this.http.getRepos(this.route.snapshot.paramMap.get('username')).subscribe(
      data=>(this.info = data)
    );
  }
  onBack(): void{
    this.router.navigate(['/welcome']);
  }
}
