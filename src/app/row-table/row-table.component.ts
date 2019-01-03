import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';

import { RowService } from '../row.service';
import { Observable } from 'rxjs';
import { Row } from '../row';

@Component({
  selector: 'app-row-table',
  templateUrl: './row-table.component.html',
  styleUrls: ['./row-table.component.sass']
})
export class RowTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: Observable<Row[]>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['age', 'name', 'email', 'url', 'bio', 'birthday', 'avatar'];

  constructor(private rowService: RowService) { }

  ngOnInit() {
    this.rowService.loadAll();
    this.dataSource = this.rowService.rows;
  }
}
