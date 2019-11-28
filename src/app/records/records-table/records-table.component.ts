import { Component, OnInit, Input } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { Record } from '../entities/record';

@Component({
  selector: 'app-records-table',
  templateUrl: './records-table.component.html',
  styleUrls: ['./records-table.component.scss']
})
export class RecordsTableComponent implements OnInit {

  @Input()
  dataSource: DataSource<Record[]>;

  @Input()
  displayedColumns: string[];

  constructor() { }

  ngOnInit() {
  }

}
