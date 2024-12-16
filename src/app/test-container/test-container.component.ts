import { Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-test-container',
  standalone: true,
  imports: [],
  templateUrl: './test-container.component.html',
  styleUrl: './test-container.component.css'
})
export class TestContainerComponent {
  sanitizer = inject(DomSanitizer);
  url=this.sanitizer.bypassSecurityTrustResourceUrl(`http://localhost:45471/test`);
}
