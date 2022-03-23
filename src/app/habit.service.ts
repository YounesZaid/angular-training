import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Habit } from './interface/habit';

@Injectable({
  providedIn: 'root',
})
export class HabitService {
  public habits: Habit[] = [
    { id: 1, title: 'habit 1' },
    { id: 2, title: 'habit 2' },
    { id: 3, title: 'habit 3' },
    { id: 4, title: 'habit 4' },
    { id: 5, title: 'habit 5' },
  ];

  constructor() {}

  getHabits(): Observable<Habit[]> {
    return of(this.habits);
  }
  addHabit(habit: Habit) {
    const id = this.habits.length + 1;
    habit.id = id;
    this.habits.push(habit);
  }
}
