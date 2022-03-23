import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HabitService } from '../habit.service';
import { Habit } from '../interface/habit';

@Component({
  selector: 'habit-list',
  templateUrl: './habit-list.component.html',
  styleUrls: ['./habit-list.component.scss'],
})
export class HabitListComponent implements OnInit {
  habits!: Observable<Habit[]>;

  constructor(private habitService: HabitService) {}

  ngOnInit(): void {
    // with subscribe approach
    // this.habitService.getHabits().subscribe(
    //   (habits) => {
    //     this.habits = habits;
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
    // async approach
    this.habits = this.habitService.getHabits();

    // Subscribe to get values edited by angular operators
    this.habitService.squareOdd().subscribe((x) => console.log('values ', x));
  }

  onAddHabit(habit: any) {
    this.habitService.addHabit(habit);
  }
}
