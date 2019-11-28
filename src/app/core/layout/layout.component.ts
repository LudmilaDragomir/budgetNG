import { Component, OnInit, OnDestroy, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { MenuItemDirective } from 'src/app/menu-item.directive';
import { Button } from 'protractor';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnDestroy {

@ViewChildren(MenuItemDirective)
private buttons: QueryList<MenuItemDirective>;
private selected: string;
private routerSub: Subscription;
loadingRoute = false;


  // constructor(iconRegistry: MatIconRegistry, sanitazer: DomSanitizer) {
  //   iconRegistry.addSvgIcon('home', sanitazer.bypassSecurityTrustResourceUrl('assets/home.svg'));
  //   iconRegistry.addSvgIcon('list', sanitazer.bypassSecurityTrustResourceUrl('assets/list.svg'));
  //   iconRegistry.addSvgIcon('settings', sanitazer.bypassSecurityTrustResourceUrl('assets/settings.svg'));
  // }

  constructor(iconRegistry: MatIconRegistry, sanitazer: DomSanitizer, router: Router) {
    iconRegistry.addSvgIcon('home', sanitazer.bypassSecurityTrustResourceUrl('assets/home.svg'));
    iconRegistry.addSvgIcon('list', sanitazer.bypassSecurityTrustResourceUrl('assets/list.svg'));
    iconRegistry.addSvgIcon('settings', sanitazer.bypassSecurityTrustResourceUrl('assets/settings.svg'));
  }

  select(name: string) {
    console.log('SSS');
    this.selected = name;
    this.buttons.forEach(button => button.isSelected = button.name === name);
  }
  ngOnDestroy() {

  }

}
