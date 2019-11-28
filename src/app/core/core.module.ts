import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule,  MatIconModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockApi } from '../mocks/mock.api';
import { RouterModule } from '@angular/router';
import { MenuItemDirective } from '../menu-item.directive';





@NgModule({
  declarations: [LayoutComponent,  MenuItemDirective],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    RouterModule,
    // next line intercepts HTTP calls to update data
    HttpClientInMemoryWebApiModule.forRoot(MockApi, {passThruUnknownUrl: true, delay: 1000}), //
  ],
  exports: [LayoutComponent]
})
export class CoreModule { }
