import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  onClick(path: string) {
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate([path]));
  }

  getActive(path: string) {
    if (this.router.url.includes(path)) {
      return 'active';
    }
    return '';
  }
}
