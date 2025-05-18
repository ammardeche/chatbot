import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { levels } from '../../modules/levels';
import { FormsModule } from '@angular/forms';
import { LevelServiceService } from '../../service/level-service.service';

@Component({
  selector: 'app-level',
  imports: [RouterLink, FormsModule],
  templateUrl: './level.component.html',
  styleUrl: './level.component.css',
})
export class LevelComponent {
  private levels = levels;
  selectedLevel: string = '';

  constructor(private levelService: LevelServiceService) {}
  getLevels() {
    return this.levels;
  }
  SetLevel() {
    this.levelService.setLevel(this.selectedLevel);
    console.log(this.selectedLevel);
  }
}
