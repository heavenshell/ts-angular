import { Location } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClrDatagridSortOrder, ClrDatagridStateInterface } from '@clr/angular';

import { DefaultService, Launch } from 'src/apis/spacex';
import { convertDatagrState } from 'src/app/shared/clr-datagrid';
import { buildQueryString } from 'src/app/shared/utils';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.scss'],
})
export class LaunchListComponent implements OnInit {
  readonly DEFAULT_PAGE = 1;
  readonly DEFAULT_SIZE = 10;
  items: Launch[] = [];
  datetimeDescSort = ClrDatagridSortOrder.DESC;
  loading = true;
  total = 200;
  page = this.DEFAULT_PAGE;
  size = this.DEFAULT_SIZE;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private service: DefaultService
  ) {}

  ngOnInit(): void {
    const page =
      Number(this.route.snapshot.queryParamMap.get('page')) || this.page;
    this.page = isNaN(page) ? this.DEFAULT_PAGE : page;
    const size =
      Number(this.route.snapshot.queryParamMap.get('size')) || this.size;
    this.size = isNaN(size) || size === 0 ? this.DEFAULT_SIZE : Number(size);
    const order = this.route.snapshot.queryParamMap.get('order') || 'desc';
    if (order === 'asc') {
      this.datetimeDescSort = ClrDatagridSortOrder.ASC;
    }
  }

  refresh(state: ClrDatagridStateInterface) {
    const { page, order, sortby } = convertDatagrState(state);
    this.fetchData(page.current, page.size, order, 'launch_date_local');
  }

  fetchData(page: number, pageSize: number, order: string, sort: string) {
    this.loading = true;
    const limit = pageSize;
    const offset = (page - 1) * pageSize;
    const params = {};
    this.service.launchesQuery(params, limit, offset, order, sort).subscribe(
      (res) => {
        this.loading = false;
        this.items = res;
        const query = buildQueryString(this.router, { page, pageSize, order });
        this.location.replaceState('/launches', query);
      },
      () => {
        this.loading = false;
      }
    );
  }
}
