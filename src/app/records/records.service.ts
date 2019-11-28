import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Record } from '../records/entities/record';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor(private http: HttpClient) { }

  getRecords(): Observable<Record[]> {
    return this.http.get<Record[]>('../records/entities/record.ts');
  }

  searchRecords(search: string) : Observable<Record[]>{
    return this.http.get<Record[]>('../records/entities/record.ts');
  }
}
