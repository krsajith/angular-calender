import { Component, HostListener, OnInit, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {




  title = 'angular-19-01';

  timerStarted = new Date();

  time = 0;

  ngOnInit(): void {
    setInterval(()=>{
      this.time= (new Date().getTime() - this.timerStarted.getTime()) / 1000;
    },1000)
  }

  // @HostListener('document:keyup', ['$event'])
  // @HostListener('document:mousemove', ['$event'])
  // async onClick(e: any) {
  //     console.log(e);      

  // }
}
