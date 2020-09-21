import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DefaultService, Launch } from 'src/apis/spacex';

@Component({
  selector: 'app-launch-detail',
  templateUrl: './launch-detail.component.html',
  styleUrls: ['./launch-detail.component.scss'],
})
export class LaunchDetailComponent implements OnInit {
  item: Launch = null;
  loading = false;

  constructor(private route: ActivatedRoute, private service: DefaultService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.fetchData(id);
  }

  fetchData(id) {
    this.loading = true;
    this.service.launchQuery(id).subscribe(
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
