import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface TestimonialItem {
  name: string;
  location: string;
  quote: string;
  rating: number;
}

export interface ContactFormState {
  name: string;
  phone: string;
  email: string;
  message: string;
}