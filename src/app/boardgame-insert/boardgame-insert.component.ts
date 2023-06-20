import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BoardgamesService } from '../boardgames.service';
import { Boardgame } from '../interfaces/boardgame.interfaces';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-boardgame-insert',
  templateUrl: './boardgame-insert.component.html',
  styleUrls: ['./boardgame-insert.component.css']
})
export class BoardgameInsertComponent {
  form: FormGroup;
  bggForm: FormGroup;

  constructor(private service: BoardgamesService, private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      boardgameName: ['', Validators.required],
      minPlayers: ['', Validators.required],
      maxPlayers: ['', Validators.required],
      minPlayingTime: ['', Validators.required],
      maxPlayingTime: ['', Validators.required],
      complexityWeight: ['', Validators.required],
      categories: [''],
    });
    this.bggForm = this.fb.group({
      bggId: ['', Validators.required],
    });
  }

  onBggSubmit() {
    const bggId = this.bggForm.value.bggId;
    this.service.insertBggBoardgame(bggId).subscribe((res) => {
      this.router.navigate(['/boardgames-list']);
    },
    (err: HttpErrorResponse) => {
      if (err.status === 404) {
        window.alert('Wrong BGG Id');
      } else if (err.status === 400) {
        window.alert('Boardgame already in your collection!');
      } else {
        window.alert('Service unvaiable');
      }
    })
  }


  onSubmit() {
    if (this.form.valid) {
      const formValue = this.form.value;
      let categories = formValue.categories.split(',').map((s: string) => s.trim());
      formValue.categories = categories;
      const boardgame = formValue as Boardgame;
      this.service.insertCustomBoardgame(boardgame).subscribe((res) => {
        console.log(res);
        this.router.navigate(['/boardgames-list']);
      });
    } else {
      console.log("invalid form");
    }
  }


}
