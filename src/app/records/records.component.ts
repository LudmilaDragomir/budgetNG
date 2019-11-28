import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, map, distinctUntilChanged, tap, switchMap } from 'rxjs/operators';
import { RecordsService } from './records.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements AfterViewInit, OnDestroy {

  @ViewChild('filter', {static: true}) filter: ElementRef;
  dataSource = new MatTableDataSource();
  isLoading = true;
  dispalyedColumns = ['datetime', 'counterparty', 'category', 'value'];
  keyupSubscription: Subscription;

  constructor(private recordsService: RecordsService) { }

  ngAfterViewInit() {
    this.keyupSubscription = fromEvent(this.filter.nativeElement, 'keyup')
      .pipe(
        debounceTime(1000),
        // tslint:disable-next-line: no-angle-bracket-type-assertion
        map((event: Event) => (<HTMLInputElement> event.target).value),
        distinctUntilChanged(),
        tap(() => this.isLoading = true),
        switchMap(value => this.recordsService.searchRecords(value)),
      )
      .subscribe((data) => {
        this.isLoading = false;
        this.dataSource.data = data;
      });
  }
  ngOnDestroy(): void {
    // this.keyupSubscription = null;
    this.keyupSubscription.unsubscribe();
  }
}
