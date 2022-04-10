import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css'],
})
export class PriceComponent implements OnInit {
  values = '';
  l = 0;
  constructor() {}

  ngOnInit(): void {}
  onKey(event: any) {
    // without type info
    this.l = event.target.value.length;
    for (let i = this.l; i >= 0; i--) {
      if (i % 3 == 0) {
      }
    }
    this.values = event.target.value + ' - sorry not ready yet';
  }
}
