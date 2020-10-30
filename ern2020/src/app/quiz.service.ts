import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private omens_url = 'assets/omens.json';  // URL to web api

  constructor() { }
}
