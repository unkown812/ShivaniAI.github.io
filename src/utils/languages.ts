import { Language } from '../types/chat';

export const supportedLanguages: Language[] = [
  { code: 'en', name: 'English', voice: 'en-US' },
  { code: 'mr', name: 'Marathi', voice: 'hi-IN' }, // Using Hindi voice as fallback
  { code: 'hi', name: 'Hindi', voice: 'hi-IN' },
  { code: 'gu', name: 'Gujarati', voice: 'hi-IN' }
 ];