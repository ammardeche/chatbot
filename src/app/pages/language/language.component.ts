import { Component, NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { languages } from '../../modules/ILanguages';
import { FormControl, FormsModule } from '@angular/forms';
import { LanguageServiceService } from '../../service/language-service.service';

@Component({
  selector: 'app-language',
  imports: [RouterLink, FormsModule],
  templateUrl: './language.component.html',
  styleUrl: './language.component.css',
})
export class LanguageComponent {
  private languagesList = languages;
  selectedLanguage: string = '';

  constructor(private languageService: LanguageServiceService) {}

  getLanguages() {
    return this.languagesList;
  }

  SetLanguage() {
    this.languageService.setLanguage(this.selectedLanguage);
    console.log(this.selectedLanguage);
  }
}
