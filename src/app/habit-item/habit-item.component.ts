import { Component, Input, OnInit } from '@angular/core';
import { Habit } from '../interface/habit';

@Component({
  selector: 'habit-item',
  templateUrl: './habit-item.component.html',
  styleUrls: ['./habit-item.component.scss'],
})
export class HabitItemComponent implements OnInit {
  @Input()
  habit!: Habit;
  constructor() {}

  ngOnInit(): void {}
}
