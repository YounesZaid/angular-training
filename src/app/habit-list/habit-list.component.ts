import { Component, OnInit } from '@angular/core';

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

  ngOnInit(): void {}
}
