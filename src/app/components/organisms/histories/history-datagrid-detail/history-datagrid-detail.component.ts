import { Component, Input, OnInit } from '@angular/core';

import { History } from 'src/apis/spacex';

@Component({
  selector: 'app-organisms-history-datagrid-detail',
  templateUrl: './history-datagrid-detail.component.html',
  styleUrls: ['./history-datagrid-detail.component.scss'],
})
export class HistoryDatagridDetailComponent implements OnInit {
  loading = false;
  @Input() item: History = null;

  constructor() {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}
}
