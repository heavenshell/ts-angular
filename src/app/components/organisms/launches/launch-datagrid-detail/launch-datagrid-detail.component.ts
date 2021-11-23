import { Component, Input, OnInit } from '@angular/core';

import { Launch } from 'src/apis/spacex';

@Component({
  selector: 'app-launch-datagrid-detail',
  templateUrl: './launch-datagrid-detail.component.html',
  styleUrls: ['./launch-datagrid-detail.component.scss'],
})
export class LaunchDatagridDetailComponent implements OnInit {
  loading: false;
  @Input() item: Launch;

  constructor() {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}
}
