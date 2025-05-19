import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChatServiceService {
  // deepseek api url
  private apiUrl = ' https://api.deepseek.ai/v1/chat/completions';
  // deepseek api key
  private apiKey = 'sk-2187555e1bb5443796fcb81031867454';
  // deepseek api headers
  private headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${this.apiKey}`,
  };
  // deepseek api body
  sendMessage(userMessage: string, language: string, level: string) {
    const prompt = `You are a helpful language tutor. Speak in ${language} to a ${level} learner. The student said: "${userMessage}"`;

    const body = {
      model: 'deepseek-chat',
      message: [
        {
          role: 'system  ',
          content: 'You are a language teacher.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
    });

    return this.http.post(this.apiUrl, body, { headers });
  }

  constructor(private http: HttpClient) {}
}
