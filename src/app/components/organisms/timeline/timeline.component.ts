import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

import { Launch } from 'src/apis/spacex';

@Component({
  selector: 'app-organisms-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
  @Input() loading = false;
  @Input() items: Launch[] = [];
  @Output() handleOldLinkClick = new EventEmitter();
  @Output() handleNewLinkClick = new EventEmitter();

  constructor() {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}

  onOldLinkClick() {
    this.handleOldLinkClick.emit();
  }

  onNewLinkClick() {
    this.handleNewLinkClick.emit();
  }
}
