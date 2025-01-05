export interface Message {
  text: string;
  sender: 'user' | 'bot';
  language?: string;
}

export interface Language {
  code: string;
  name: string;
  voice: string;
}