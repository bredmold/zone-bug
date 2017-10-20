import {Component, OnInit, Testability} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  timestamp: Date = null;
  intervalId = null;

  constructor(private testability: Testability) {
  }

  stopInterval() {
    console.log('Stop called');
    clearInterval(this.intervalId);
  }

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.timestamp = new Date();
    }, 1000);
  }
}
