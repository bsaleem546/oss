import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  title = 'OSS | Not Found';
  constructor(private titleService: Title) {}

  setDocTitle(title: string) {
    this.titleService.setTitle(title);
  }

  ngOnInit() {
    this.setDocTitle(this.title)
  }
}
