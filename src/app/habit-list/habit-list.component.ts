import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

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
  }

  onAddHabit(habit: any) {
    this.habitService.addHabit(habit);
  }
}
