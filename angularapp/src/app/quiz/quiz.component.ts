import { Component, OnInit } from '@angular/core';
import { Omen } from '../omen';
import { OmenService } from '../omen.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  omens: Omen[];
  indices: number[];
  numQuestions: number =6 ;
  currentQ: number = 0;
  selectedAnswer: string[];
  score: number = 0;
  step: number = 0;

  constructor(private omenService: OmenService,
              ) { }

  setStep(index: number) {
    console.log("Setting step ", index);
    this.step = index;
  }

  nextStep() {
    console.log("Next step ", this.step+1);
    this.step++;
  }

  prevStep() {
    console.log("Prev step ", this.step-1);
    this.step--;
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
    if(this.selectedAnswer[0]==this.omens[this.currentQ].apodosis){
      this.score = this.score + 1;
    }
    else{
      //
    }
    console.log("LOGGING", this.currentQ, this.selectedAnswer[0]);
    this.currentQ = this.currentQ + 1;
  }

  ngOnInit(): void {
    this.getOmens();
  }
  restart(): void{
    this.getOmens();
    this.currentQ = 0;
    this.selectedAnswer = [];
    this.score = 0;
  }
}
