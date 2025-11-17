import { Component, signal } from '@angular/core';
import { NavComponent } from "./components/nav-component/nav-component";
import { HeroComponent } from "./components/hero-component/hero-component";
import { SkillsComponent } from "./components/skills-component/skills-component";

@Component({
  selector: 'app-root',
  imports: [NavComponent, HeroComponent, SkillsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Yashvanth - Portfolio');
}