import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'control-messages',
  templateUrl: './control-messages.component.html',
})
export class ControlMessagesComponent {
  @Input() control!: FormControl;

  constructor(public validationService: ValidationService) {}
}
