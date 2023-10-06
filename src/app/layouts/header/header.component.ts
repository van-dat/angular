import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  
})
export class HeaderComponent {
  @Output() ishowEvent = new EventEmitter<void>();
  constructor() {

  }
  ishow(): void {
    this.ishowEvent.emit()
  }
}
