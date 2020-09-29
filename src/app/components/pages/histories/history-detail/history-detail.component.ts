import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DefaultService, History } from 'src/apis/spacex';

@Component({
  selector: 'app-history-detail',
  templateUrl: './history-detail.component.html',
  styleUrls: ['./history-detail.component.scss'],
})
export class HistoryDetailComponent implements OnInit {
  item: History = null;
  loading = false;

  constructor(private route: ActivatedRoute, private service: DefaultService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.fetchData(id);
  }

  fetchData(id) {
    this.loading = true;
    this.service.historyQuery(id).subscribe(
      (res) => {
        this.loading = false;
        this.item = res;
      },
      () => {
        this.loading = false;
      }
    );
  }
}
