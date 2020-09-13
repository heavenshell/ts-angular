import { Location } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ClrDatagridSortOrder,
  ClrDatagridStateInterface,
  ClrLoadingState,
} from '@clr/angular';
import {
  debounceTime,
  distinctUntilChanged,
  takeUntil,
  tap,
} from 'rxjs/operators';

import { DefaultService, Launch } from 'src/apis/spacex';
import { convertDatagrState } from 'src/app/shared/clr-datagrid';

type QueryParams = {
  [param: string]: string | ReadonlyArray<string>;
};

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.scss'],
})
export class LaunchListComponent implements OnInit, OnDestroy {
  private onDestroy$ = new EventEmitter();
  readonly PAGE = 1;
  readonly SIZE = 10;
  items: Launch[] = [];
  datetimeDescSort = ClrDatagridSortOrder.DESC;
  loading = true;
  total = 200;
  page = this.PAGE;
  size = this.SIZE;

  constructor(
    private cd: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private service: DefaultService
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap
      .pipe(
        takeUntil(this.onDestroy$),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe((params) => {
        const page = Number(params.get('page'));
        this.page = isNaN(page) ? 1 : page;
        const size = Number(params.get('size'));
        this.size = isNaN(size) ? this.SIZE : size;

        const order = params.get('order') || 'desc';
        if (order === 'asc') {
          this.datetimeDescSort = ClrDatagridSortOrder.ASC;
        }
        this.cd.detectChanges();
      });
  }

  buildQueryString(page, size, order) {
    const queryParams = {
      page,
      size,
      order,
    };

    const urlTree = this.router.createUrlTree([], {
      queryParams,
      queryParamsHandling: 'merge',
    });

    const httpParams = new HttpParams({ fromObject: urlTree.queryParams });
    return httpParams.toString();
  }

  refresh(state: ClrDatagridStateInterface) {
    const { page, order, sortby } = convertDatagrState(state);
    this.fetchData(page.current, page.size, order, 'launch_date_local');
  }

  fetchData(page: number, pageSize: number, order: string, sort: string) {
    this.loading = true;
    const limit = pageSize;
    const offset = (page - 1) * pageSize;
    this.service.launchesQuery(undefined, limit, offset, order, sort).subscribe(
      (res) => {
        this.loading = false;
        this.items = res;
        const query = this.buildQueryString(page, pageSize, order);
        this.location.replaceState('/launches', query);
      },
      () => {
        this.loading = false;
      }
    );
  }

  ngOnDestroy() {
    this.onDestroy$.complete();
  }
}
