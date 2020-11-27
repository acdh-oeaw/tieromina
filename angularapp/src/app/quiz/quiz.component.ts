import { Component, OnInit, ViewChild  } from '@angular/core';
import { Omen } from '../omen';
import { OmenService } from '../omen.service';
import {MatAccordion} from '@angular/material/expansion';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  omens: Omen[];
  indices: number[];
  numQuestions: number =6 ;
  currentQ: number = 0;
  selectedAnswer: string[];
  score: number = 0;
  step: number = 0;
  answered: string[] = ['', '', '', '', '', ''];
  showCorrectAnswers = false;
  constructor(private omenService: OmenService,
              ) { }

  setStep(index: number) {
    console.log("Setting step ", index);
    this.step = index;
  }

  learnMore(){
    this.showCorrectAnswers = true;
    this.accordion.openAll();

  }
  getOmens(): void {
    this.omenService.getOmens()
      .subscribe(omens => {
        this.omens = omens
          .map((a) => ({sort: Math.random(), value: a}))
          .sort((a, b) => a.sort - b.sort)
          .map((a) => a.value).slice(0, this.numQuestions);
      });
  }
  submitAnswer(currentStep): void{
    console.log(currentStep);
    this.answered[currentStep] = this.selectedAnswer[0];
    if(this.selectedAnswer[0]==this.omens[this.currentQ].apodosis){
      this.score = this.score + 1;
    }
    else{
      //
    }
    console.log(this.answered);
    this.currentQ = Math.min(this.currentQ + 1, this.numQuestions);
  }

  ngOnInit(): void {
    this.getOmens();
  }
  restart(): void{
    this.getOmens();
    this.currentQ = 0;
    this.selectedAnswer = [];
    this.score = 0;
    this.answered = ['', '', '', '', '', ''];
  }
}
