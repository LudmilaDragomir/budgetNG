import { Directive, HostBinding, Input, Output, EventEmitter, HostListener } from '@angular/core';


@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[menuItem]'
})
export class MenuItemDirective {

  // constructor() { }
 @HostBinding('class.menu-item') menuItem = true;

 // tslint:disable-next-line: ban-types
 @HostBinding('class.selected') isSelected: Boolean = false;


 @Input()
 name: string;

 @Output()
 // tslint:disable-next-line: ban-types
 selected: EventEmitter<String> = new EventEmitter<String>();

 @HostListener('click', ['$event'])
 Selection() {
   console.log('litenerrrr');
   this.selected.emit(this.name);
 }
}
