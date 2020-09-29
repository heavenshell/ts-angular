import { Component, Input, OnInit } from '@angular/core';

import { History } from 'src/apis/spacex';

@Component({
  selector: 'app-organisms-history-detail',
  templateUrl: './history-detail.component.html',
  styleUrls: ['./history-detail.component.scss'],
})
export class HistoryDetailComponent implements OnInit {
  loading: false;
  @Input() item: History;

  constructor() {}

  ngOnInit(): void {}
}
