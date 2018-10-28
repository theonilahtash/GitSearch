import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GitService {
  private username:string;
  private clientid = '87b18bee67a5db132bc1';
  private clientsecret = '5f69b5c02a15fa46e5dcd9319ab7f72515b0dcb6';
  constructor(private http:Http) {
    console.log("Service is now ready!");
    this.username = 'theonilahtash';
  }
  getGitInfo(){
    return this.http.get(" https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" +this.clientsecret)
    .pipe(map(res =>res.json()));
  }
  getGitRepos(){
    return this.http.get(" https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" +this.clientsecret)
    .pipe(map(res =>res.json()));

  }
  updateGit(username:string){
    this.username = username;

  }
}
