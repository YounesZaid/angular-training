import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'habit-list',
  templateUrl: './habit-list.component.html',
  styleUrls: ['./habit-list.component.scss'],
})
export class HabitListComponent implements OnInit {
  public habits: any[] = [
    { id: 1, title: 'habit 1' },
    { id: 2, title: 'habit 2' },
    { id: 3, title: 'habit 3' },
    { id: 4, title: 'habit 4' },
    { id: 5, title: 'habit 5' },
  ];

  constructor() {}

  onAddHabit(habit: any) {
    const id = this.habits.length + 1;
    habit.id = id;
    this.habits.push(habit);
  }

  ngOnInit(): void {}
}
