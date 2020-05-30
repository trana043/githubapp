import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubInfo } from './github-info';
import {tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { RepoInfo } from './repo-info';

@Injectable({
  providedIn: 'root'
})
export class GithubInfoService {
  url: string = "https://api.github.com/users";
  constructor(private http: HttpClient) { }
  b: GithubInfo[];
  getUsers = (query: string): Observable<GithubInfo[]> =>{
      return this.http.get<GithubInfo[]>(this.url + query).pipe(
        map(item => {if (item instanceof Array){ return item} return [item];})
        )
  }

  getRepos = (user: string): Observable<RepoInfo[]> => {
    return this.http.get<RepoInfo[]>(this.url+"/"+user+"/repos").pipe(
      map(items=>{
        if (items instanceof Array)
          return items;
        else 
          return [items];
      })
    )
  };
}
