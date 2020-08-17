import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  archives = [
    { year: 2018, month: 12 },
    { year: 2019, month: 7 },
    { year: 2020, month: 3 },
  ];
  constructor() {}

  ngOnInit(): void {}
}
