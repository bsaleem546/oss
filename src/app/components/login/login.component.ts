import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'OSS | Login';
  constructor(private titleService: Title) {}

  setDocTitle(title: string) {
    this.titleService.setTitle(title);
  }

  ngOnInit() {
    this.setDocTitle(this.title)
  }
}
