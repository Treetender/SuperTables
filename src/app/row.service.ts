import { Injectable } from '@angular/core';
import * as Faker from 'faker';
import { Row } from './row';
import { BehaviorSubject } from 'rxjs';
import { createRootView } from '@angular/core/src/view/view';

@Injectable({
  providedIn: 'root'
})
export class RowService {

  private _rows: BehaviorSubject<Row[]>;
  private baseUrl: string;
  private dataStore: {
    rows: Row[]
  };

  constructor() {
    this.baseUrl = 'localhost';
    this.dataStore = { rows: [] };
    this._rows = <BehaviorSubject<Row[]>> new BehaviorSubject([]);
   }

  get rows() {
    return this._rows.asObservable();
  }

  loadAll() {
    this.dataStore.rows = Array(100).fill(1).map(this.createRow);
    this._rows.next(Object.assign({}, this.dataStore).rows);
  }

  private createRow(): Row {
    const row: Row =  {
      name: Faker.name.findName(),
      age: Faker.random.number() % 100,
      avatar: Faker.image.avatar(),
      bio: Faker.hacker.phrase(),
      birthday: Faker.date.past(),
      email: Faker.internet.email(),
      url: Faker.internet.url()
    };

    return row;
  }
}
