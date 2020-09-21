import { Component, Input, OnInit } from '@angular/core';

import { Launch } from 'src/apis/spacex';

@Component({
  selector: 'app-launch-datagrid-detail',
  templateUrl: './launch-datagrid-detail.component.html',
  styleUrls: ['./launch-datagrid-detail.component.scss'],
})
export class LaunchDatagridDetailComponent implements OnInit {
  loading: false;
  image = '';
  isShowModal = false;
  @Input() item: Launch;

  constructor() {}

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  showImage(image: string) {
    this.image = image;
    this.isShowModal = true;
  }

  goToFlickr(image: string) {
    window.open(image, '_blank', 'noopener,noreferrer');
  }

  getVideoId(url: string) {
    const { pathname } = new URL(url);
    return pathname;
  }
}
