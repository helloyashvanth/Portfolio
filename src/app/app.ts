import { Component, signal } from '@angular/core';
import { NavComponent } from "./components/nav-component/nav-component";
import { HeroComponent } from "./components/hero-component/hero-component";

@Component({
  selector: 'app-root',
  imports: [NavComponent, HeroComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Yashvanth - Portfolio');
}