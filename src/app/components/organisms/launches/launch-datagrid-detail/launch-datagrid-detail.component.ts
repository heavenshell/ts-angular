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

  ngOnInit(): void {}
}
