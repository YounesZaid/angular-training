import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Habit } from '../interface/habit';

@Component({
  selector: 'habit-form',
  templateUrl: './habit-form.component.html',
  styleUrls: ['./habit-form.component.scss'],
})
export class HabitFormComponent implements OnInit {
  @Output() addHabit = new EventEmitter<any>();
  public habitForm: any;

  constructor(private formBuilder: FormBuilder) {
    this.habitForm = formBuilder.group({
      title: '',
    });
  }

  handleSubmit(newHabit: Habit) {
    this.addHabit.emit(newHabit);
    this.habitForm.reset();
  }
  ngOnInit(): void {}
}
