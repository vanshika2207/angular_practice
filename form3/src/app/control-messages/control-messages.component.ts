import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'control-messages',
  template: `<div>
    <p *ngIf="control.invalid && control.touched">
      {{ service.getError(control) }}
    </p>
  </div>`,
})
export class ControlMessagesComponent implements OnInit {
  @Input() control: FormControl;

  constructor(private service: ValidationService) {}

  ngOnInit() {
    // No additional code needed here for now
  }
}
