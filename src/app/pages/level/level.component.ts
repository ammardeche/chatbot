import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { levels } from '../../modules/levels';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-level',
  imports: [RouterLink, FormsModule],
  templateUrl: './level.component.html',
  styleUrl: './level.component.css',
})
export class LevelComponent {
  private levels = levels;
  selectedLevel: string = '';

  constructor() {}
  getLevels() {
    return this.levels;
  }
  SetLevel() {
    console.log(this.selectedLevel);
  }
}
