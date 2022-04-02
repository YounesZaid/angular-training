import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { Habit } from '../interface/habit';

@Injectable({
  providedIn: 'root',
})
export class HabitService {
  public habits: Habit[] = [
    { _id: 1, title: 'habit 1' },
    { _id: 2, title: 'habit 2' },
    { _id: 3, title: 'habit 3' },
    { _id: 4, title: 'habit 4' },
    { _id: 5, title: 'habit 5' },
  ];

  // to refire the getHabits to refresh after adding a habit
  private refetchSubject = new BehaviorSubject(null);

  constructor(private http: HttpClient) {}

  get refetch() {
    return this.refetchSubject.asObservable();
  }

  getHabits(): Observable<Habit[]> {
    // return of(this.habits);
    return this.http.get<Habit[]>('/api/habit');
  }
  addHabit(habit: Habit) {
    return this.http
      .post('/api/habit', {
        ...habit,
      })
      .pipe(tap(() => this.refetchSubject.next(null)));
    const id = this.habits.length + 1;
    habit._id = id;
    this.habits.push(habit);
  }
  deleteHabit(habit: Habit) {
    const id = habit._id;
    return this.http
      .delete(`/api/habit/${id}`)
      .pipe(tap(() => this.refetchSubject.next(null)));
    // const id = this.habits.length + 1;
    // habit._id = id;
    // this.habits.push(habit);
  }

  // example of pipe/filter/map operators
  squareOdd(): Observable<any> {
    return of(1, 2, 3, 4, 5).pipe(
      filter((n) => n > 2),
      map((n) => n * n)
    );
  }
}
