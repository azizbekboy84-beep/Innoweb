export interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface GeneratedPost {
  title: string;
  titleRu: string;
  content: string;
  contentRu: string;
  excerpt: string;
  excerptRu: string;
  metaTitle: string;
  metaTitleRu: string;
  metaDescription: string;
  metaDescriptionRu: string;
  tags: string[];
  category: string;
  imagePrompt: string;
}

export interface TelegramPostMessage {
  title: string;
  excerpt: string;
  url: string;
  tags: string[];
  imageUrl?: string;
}

export interface LeadFormData {
  name: string;
  phone: string;
  email?: string;
  company?: string;
  service: string;
  message?: string;
}

export interface Dictionary {
  nav: {
    home: string;
    services: string;
    portfolio: string;
    blog: string;
    pricing: string;
    contact: string;
    about: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    cta_secondary: string;
  };
  services: {
    title: string;
    subtitle: string;
    web: { title: string; description: string };
    telegram: { title: string; description: string };
    chatbot: { title: string; description: string };
    automation: { title: string; description: string };
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    phone: string;
    email: string;
    company: string;
    service: string;
    message: string;
    submit: string;
    success: string;
  };
  footer: {
    description: string;
    services_title: string;
    company_title: string;
    contact_title: string;
    rights: string;
  };
}
