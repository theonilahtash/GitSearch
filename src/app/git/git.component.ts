import { Component, OnInit } from '@angular/core';
import { GitService } from '../gits/git.service';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  providers:[GitService], //add the providers to the component
  styleUrls: ['./git.component.css']
})
export class GitComponent implements OnInit {
  git: any[];
  repos: any [];
  username:string;


  constructor(private gitService:GitService) {

   }
   findGit(){
     this.gitService.updateGit(this.username);
     this.gitService.getGitInfo().subscribe(git =>{
       console.log(git);
       this.git = git;
     });
     this.gitService.getGitRepos().subscribe(repos =>{
       console.log(repos);
       this.repos = repos;
     })
   }

  ngOnInit() {
  }

}
