import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validation } from '../validationService';
@Component({
  selector: 'app-control-message',
  templateUrl: './control-message.component.html',
  styleUrl: './control-message.component.css',
})
export class ControlMessageComponent {
  @Input() control: FormControl;
  constructor(private ValidationService: Validation) {}
}
