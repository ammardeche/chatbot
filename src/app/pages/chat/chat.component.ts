import { Component } from '@angular/core';
import { ChatServiceService } from '../../service/chat-service.service';
import { LanguageServiceService } from '../../service/language-service.service';
import { LevelServiceService } from '../../service/level-service.service';
import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  imports: [NgClass, FormsModule, NgIf, NgFor, CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css',
})
export class ChatComponent {
  messages: { sender: 'user' | 'bot'; text: string }[] = [];
  userInput: string = '';
  loading: boolean = false;

  constructor(
    private chatService: ChatServiceService,
    private languageService: LanguageServiceService,
    private levelService: LevelServiceService
  ) {}

  sendMessage() {
    const text = this.userInput.trim();
    if (!text) return;
    if (this.userInput.trim() === '') {
      return;
    }

    this.messages.push({ sender: 'user', text: this.userInput });
    this.userInput = ''; // ✅ Clear the input field after sending

    this.loading = true;

    const language = this.languageService.getSelectedLanguage();
    const level = this.levelService.getSelectedLevel();
    setTimeout(() => {
      this.messages.push({ sender: 'bot', text: 'Typing...' });

      this.chatService.sendMessage(text, language, level).subscribe({
        next: (res: any) => {
          this.messages.pop(); // Remove "Typing..."
          const botReply = res.choices[0].message.content;
          this.messages.push({ sender: 'bot', text: botReply });
          this.loading = false;

          // ✅ Get follow-up suggestions based on language
          this.chatService
            .sendMessage(
              'Give a short follow-up question suggestion for language learners.',
              language,
              level
            )
            .subscribe({
              next: (suggRes: any) => {
                const suggestion = suggRes.choices[0].message.content;
                this.messages.push({
                  sender: 'bot',
                  text: `💡 You can try saying: ${suggestion}`,
                });
              },
              error: (suggErr) => {
                console.error('Suggestion Error:', suggErr);
              },
            });
        },
        error: (err) => {
          this.loading = false;
          console.error('API Error:', err);
          this.messages.push({
            sender: 'bot',
            text: '❌ Sorry, something went wrong. Please try again later.',
          });
        },
      });
    });
  }
}
