import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';

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
export class LayoutsComponent implements OnInit {
  ishow:boolean = true
  sidebarVisible:boolean = false
  id!:any
  


 constructor(private parameter :ActivatedRoute) {}
 handleIshowEvent() {
  this.ishow = !this.ishow
}
handleIsHidden () :void {
  this.sidebarVisible = !this.sidebarVisible
}
  ngOnInit(): void {
  }
}
