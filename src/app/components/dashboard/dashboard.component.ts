import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'OSS | Dashboard';
  constructor(private titleService: Title) {}

  setDocTitle(title: string) {
    this.titleService.setTitle(title);
  }

  ngOnInit() {
    this.setDocTitle(this.title)
  }
}
