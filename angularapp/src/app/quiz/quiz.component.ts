import { Component, OnInit } from '@angular/core';
import { Omen } from '../omen';
import { OmenService } from '../omen.service';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  omens: Omen[];
  indices: number[];
  quizFormGroup: FormGroup;

  constructor(private omenService: OmenService,
              private _formBuilder: FormBuilder) { }

  getOmens(): void {
    this.omenService.getOmens()
      .subscribe(omens => {
        this.omens = omens
          .map((a) => ({sort: Math.random(), value: a}))
          .sort((a, b) => a.sort - b.sort)
          .map((a) => a.value).slice(0, 6);
      });
  }

  ngOnInit(): void {
    this.quizFormGroup = this._formBuilder.group(
      {
        quizCtrl: new FormControl()

      }
    );

    this.getOmens();
  }
}

/*
  <div [formGroup]="myGroup">
  <input formControlName="firstName">
  </div>

  In your class:

  this.myGroup = new FormGroup({
  firstName: new FormControl()
  });
  */
