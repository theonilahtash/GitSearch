import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GitService } from './gits/git.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { GitComponent } from './git/git.component';

@NgModule({
  declarations: [
    AppComponent,
    GitComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [GitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
