import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LanguageComponent } from './pages/language/language.component';
import { LevelComponent } from './pages/level/level.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  {
    path: 'layout',
    component: LayoutComponent,
    children: [
      { path: '', component: LanguageComponent },
      { path: 'level', component: LevelComponent },
      { path: 'chat', component: ChatComponent },
      { path: 'contact', component: ContactComponent },
    ],
  },

  { path: '', redirectTo: 'layout', pathMatch: 'full' },
];
