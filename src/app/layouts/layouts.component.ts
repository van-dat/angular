import { Component, OnDestroy } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  animations : [
    trigger('children', [
      state('hidden', style({
        width : '0',
        left: '-100px',
        padding: '0'

      })),
      state('show', style({
        width : '30%',
        left: '*'

      })),
      transition('hidden <=> show', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ]
})
export class LayoutsComponent implements OnDestroy {
  ishow:boolean = true
 constructor() {
 
 }
 handleIshowEvent() {
  this.ishow = !this.ishow
}
  ngOnDestroy(): void {
  }
}
