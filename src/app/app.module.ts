import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { RegisterComponent } from './register/register.component';
import { BoardgamesListComponent } from './boardgames-list/boardgames-list.component';
import { BoardgameInsertComponent } from './boardgame-insert/boardgame-insert.component';

const routes: Routes = [
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'boardgames-list', component: BoardgamesListComponent
  },
  {
    path: 'boardgames-insert', component: BoardgameInsertComponent
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  }
] 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    RegisterComponent,
    BoardgamesListComponent,
    BoardgameInsertComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
