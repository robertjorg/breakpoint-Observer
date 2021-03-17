import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'breakpoint-Observer';
  public showMeTheMoney;
  public inTheMiddle;
  public showTheMiddle;

  constructor(private observer: BreakpointObserver) {}

  ngOnInit(): void {
    this.observer.observe('(max-width: 700px)').subscribe(result => {
      this.showMeTheMoney = result;
    });

    this.observer.observe(['(min-width: 700px) and (max-width: 1000px)']).subscribe(nextResult => {
      this.inTheMiddle = nextResult;
    });
  }
}
