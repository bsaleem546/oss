import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  title = 'OSS | Forget Password';
  constructor(private titleService: Title) {}

  setDocTitle(title: string) {
    this.titleService.setTitle(title);
  }

  ngOnInit() {
    this.setDocTitle(this.title)
  }
}
