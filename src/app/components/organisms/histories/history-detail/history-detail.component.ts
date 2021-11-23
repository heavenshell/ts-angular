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

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}
}
