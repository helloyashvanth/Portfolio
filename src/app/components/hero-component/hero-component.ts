import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-component',
  imports: [],
  templateUrl: './hero-component.html',
  styleUrl: './hero-component.css',
})
export class HeroComponent {
  openResume(): void {
    window.open('https://drive.google.com/file/d/1hzNY4kVVlgxZizSOwJPSr6xEblRCm99v/view?usp=sharing', '_blank');
  }
}