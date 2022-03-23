import { Component, OnInit } from '@angular/core';

import { HabitService } from '../habit.service';

@Component({
  selector: 'habit-list',
  templateUrl: './habit-list.component.html',
  styleUrls: ['./habit-list.component.scss'],
})
export class HabitListComponent implements OnInit {
  public habits: any = [];

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
