import { Component } from '@angular/core';

@Component({
  selector: 'app-calender',
  standalone: true,
  imports: [],
  templateUrl: './calender.component.html',
  styleUrl: './calender.component.css'
})
export class CalenderComponent {
  setDay() {
    document.documentElement.style.setProperty('--start-day', '4');
  }
  arr = Array.from({ length: 30 }, (_, index) => index + 1);
  startDay = 1;
}
