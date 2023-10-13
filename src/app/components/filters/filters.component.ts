import { Component, OnInit, Input, } from '@angular/core';
import { RegisonService } from 'src/app/services/regison.service';



@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
})
export class FiltersComponent implements OnInit {
  selectDay: any;
  day: any[] = [];
  // year
  year: any[] = []
  selectYear: any;
  // month
  month: any[] = []
  selectMonth: any;

  allData: any;
  dataQuan: any;
  constructor(private region: RegisonService) { }


  ngOnInit(): void {
    this.region.getAll().subscribe(res => (this.allData = res))
    this.tooltipDate()
    this.selectYear
  }

  tooltipDate() {
    const year: number = new Date().getFullYear()
    const data = []
    for (let i = 1990; i <= year; i++) {
      data.push({ nam: i, value: i })
    }
    this.year = data.reverse()

    for (let i = 1; i < 13; i++) {
      this.month.push({ thang: i, value: i })
    }
  }

  onChangeMonth(event: any) {
    const day = event === 4 || event === 6 || event === 11 || event === 9 ? 30 : event === 2 ? 28 : 31
    for (let i = 1; i <= day; i++) {
      this.day.push({ ngay: i, value: i });
    }
  }

  // filter location
  selectedTinh: any;
  selectedQuan: any;
  selectedXa: any;

  suggestionsTinh: any;
  suggestionsXa: any;
  suggestionsQuan: any;

  tinh(event: any) {

    // if(!event.query) {
    //   this.suggestionsTinh = this.allData
    // }else {
    //   const key = event.query.toLowerCase();
    //   this.suggestionsTinh = this.allData.filter((item: any) =>
    //     item.name.toLowerCase().includes(key)
    //   );
    // }
    // this.selectedQuan = ''
    // this.selectedXa = ''
    // this.selectedQuan = []
    this.region.getData(event.query).subscribe((res) => {
      this.suggestionsTinh = res.map((i: any) => i.name);
      this.selectedQuan = ''
      this.selectedXa = ''
    });
  }

  quan(event: any) {
    console.log(this.selectedTinh)
    this.dataQuan = this.allData?.find((i:any)=> i.name === this.selectedTinh)?.districts
    if (!event.query) {
      this.suggestionsQuan = this.dataQuan
      console.log('d',this.dataQuan)
      console.log('a')
    } else {
      console.log('c')
      const key = event.query.toLowerCase();
      this.suggestionsQuan = this.dataQuan.filter((item: any) =>
        item.name.toLowerCase().includes(key)
      );
    }
   
  }
  xa(event: any) {
    if (!event.query) {
      this.suggestionsXa = this.selectedQuan?.wards
    } else {
      const key = event.query.toLowerCase();
      this.suggestionsXa = this.selectedQuan.wards.filter((item: any) =>
        item.name.toLowerCase().includes(key)
      );
    }
  }
 

  // select date

}
