import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  year: number = new Date().getFullYear();
  constructor() {}

  ngOnInit() {}

  onGitHubIconClick(e: MouseEvent) {
    console.log(e);
    e.preventDefault();
    return location.assign('https://github.com/heavenshell/');
  }

  onTwitterIconClick(e: MouseEvent) {
    console.log(e);
    e.preventDefault();
    return location.assign('https://twitter.com/heavenshell/');
  }
}
