import { Component , OnInit, Input } from '@angular/core';
import { RegisonService } from 'src/app/services/regison.service';


interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}
interface day {
  ngay: String;
  value: String;
}
@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
})
export class FiltersComponent implements OnInit {    
  selectDay:any
  day :day[] = []
  constructor(private region: RegisonService){}

  ngOnInit(): void {
    
  }    
  items: any[] | undefined;

  selectedItem: any;

  suggestions: any;

  search(event:any) {
      this.region.getdata(event).subscribe(res => (this.suggestions = res))
      console.log(this.suggestions)
  }
}

