import { NgModule } from '@angular/core';
import { RecordsComponent } from './records.component';
import { RecordsTableComponent } from './records-table/records-table.component';
import { RecordsRoutingModule } from './records-routing/records-routing.module';
import { MatTableModule } from '@angular/material';
import { RecordsService } from './records.service';



@NgModule({
  declarations: [RecordsComponent, RecordsTableComponent],
  imports: [
    RecordsRoutingModule,
    MatTableModule
  ],
  providers: [RecordsService]
})
export class RecordsModule { }
