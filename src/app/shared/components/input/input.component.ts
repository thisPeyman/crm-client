import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() control!: FormControl;
  @Input() placeholder = '';
  @Input() type = '';
  @Input() className = '';
  @Input() hint = '';

  get showError(): boolean {
    return this.control.errors && this.control.dirty && this.control.touched
      ? true
      : false;
  }

  constructor() {}

  ngOnInit(): void {}
}
