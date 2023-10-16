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
  check: any;
  checkQuan: any
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
    this.day = []
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
    this.selectedTinh = event.query;
    this.region.getData(this.selectedTinh).subscribe((res) => {
      this.suggestionsTinh = res.map((i: any) => i.name);
    });
  }

  quan(event: any) {
    this.dataQuan = this.allData?.find((i: any) => i.name === this.selectedTinh)?.districts
    if (!event.query) {
      this.suggestionsQuan = this.dataQuan
    } else {
      const key = event.query.toLowerCase();
      this.suggestionsQuan = this.dataQuan?.filter((item: any) =>
        item.name.toLowerCase().includes(key)
      );
    }
    this.check = this.selectedTinh
  }
  xa(event: any) {
    if (!event.query) {
      this.suggestionsXa = this.selectedQuan?.wards
    } else {
      const key = event.query.toLowerCase();
      this.suggestionsXa = this.selectedQuan.wards?.filter((item: any) =>
        item.name.toLowerCase().includes(key)
      );
    }
    this.checkQuan = this.selectedQuan
  }

  selectTinh() {
    if (this.check !== this.selectedTinh) {
      this.selectedQuan = '';
      this.selectedXa = '';
    }
  }
  selectQuan() {
    if (this.checkQuan !== this.selectQuan) this.selectedXa = '';
  }

}
