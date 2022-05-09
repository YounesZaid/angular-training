import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Habit } from '../../interface/habit';

@Component({
  selector: 'habit-item',
  templateUrl: './habit-item.component.html',
  styleUrls: ['./habit-item.component.scss'],
})
export class HabitItemComponent implements OnInit {
  @Input()
  habit!: Habit;
  @Output() deleteHabit = new EventEmitter<Habit>();

  constructor() {}

  ngOnInit(): void {}

  delete(habit: Habit) {
    this.deleteHabit.emit(habit);
    console.log('habit to delete ', habit);
  }
}
