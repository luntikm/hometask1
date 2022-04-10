import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css'],
})
export class PriceComponent implements OnInit {
  @Input('price') values: number = 0;
  values_str = '';
  constructor() {}

  ngOnInit(): void {}
  onKey(event: any) {
    this.values_str = parseInt(event.target.value).toLocaleString();
  }
}
