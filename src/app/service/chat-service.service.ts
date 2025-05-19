import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatServiceService {
  private apiUrl = 'https://openrouter.ai/api/v1/chat/completions'; // OpenRouter endpoint
  private apiKey =
    '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';

  sendMessage(
    userMessage: string,
    language: string,
    level: string
  ): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
    });

    const body = {
      model: 'openai/gpt-3.5-turbo', // or other model from OpenRouter if you prefer
      messages: [
        {
          role: 'system',
          content: `You are a helpful language partner. Respond only in ${language}. Use vocabulary and grammar appropriate for a ${level}-level learner.`,
        },
        {
          role: 'user',
          content: userMessage,
        },
      ],
    };

    return this.http.post(this.apiUrl, body, { headers });
  }

  constructor(private http: HttpClient) {}
}
