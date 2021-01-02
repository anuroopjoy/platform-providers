import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SharedService } from 'shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title;
  constructor(private sharedService: SharedService, private cdr: ChangeDetectorRef) {
    const element = document.createElement('script');
    element.src = 'http://localhost:8080/main.js';
    document.body.appendChild(element);
  }
  ngOnInit(): void {
    this.sharedService.onAppNameChange.subscribe((name) => {
      this.title = name;
      this.cdr.detectChanges();
    });
    this.sharedService.setAppName('Main');

    setTimeout(() => {
      this.sharedService.setAppName('Main1');
    }, 7000);
  }
}
