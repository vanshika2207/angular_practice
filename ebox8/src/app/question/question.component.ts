import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  ngOnInit() {}
  @Input() questionList: Question[];
  @Output() id = new EventEmitter<number>();
  public emitQuestionId(val: number) {
    this.id.emit(val);
  }
}
