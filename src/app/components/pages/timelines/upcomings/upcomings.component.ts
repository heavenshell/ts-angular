import { Location } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DefaultService, Launch } from 'src/apis/spacex';
import { buildQueryString } from 'src/app/shared/utils';

@Component({
  selector: 'app-upcomings',
  templateUrl: './upcomings.component.html',
  styleUrls: ['./upcomings.component.scss'],
})
export class UpcomingsComponent implements OnInit {
  loading = false;
  items: Launch[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private service: DefaultService
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      const page = Number(params.get('page')) || 1;
      const size = Number(params.get('size')) || 20;

      this.fetchData(page, size, 'desc', 'launch_date_local');
    });
  }

  fetchData(page: number, pageSize: number, order: string, sort: string) {
    this.loading = true;
    const limit = pageSize;
    const offset = (page - 1) * pageSize;
    const params = {};
    this.service
      .launchesUpcomingQuery(params, limit, offset, order, sort)
      .subscribe(
        (res) => {
          this.loading = false;
          this.items = res;
          const query = buildQueryString(this.router, {
            page,
            size: pageSize,
            order,
          });
          this.location.replaceState('/timelines/upcomings', query);
        },
        () => {
          this.loading = false;
        }
      );
  }

  navigate(page: number) {
    const size = Number(this.route.snapshot.queryParamMap.get('size')) || 20;
    const order = this.route.snapshot.queryParamMap.get('order');
    const path = '/timelines/upcomings';
    const queryParams = {
      page,
      size,
      order: order === 'desc' || order === 'asc' ? order : 'desc',
    };
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate([path], { queryParams }));
  }

  onNewLinkClick() {
    const page = Number(this.route.snapshot.queryParamMap.get('page')) || 1;
    if (page === 0) {
      return;
    }

    this.navigate(page - 1);
  }

  onOldLinkClick() {
    const page = Number(this.route.snapshot.queryParamMap.get('page')) || 1;
    if (String(this.items[this.items.length - 1].id) === '1') {
      return;
    }
    this.navigate(page + 1);
  }
}
