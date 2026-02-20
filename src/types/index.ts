export interface Feature {
  image: string;
  alt: string;
  title: string;
  description: string;
}

export interface DriveFeature {
  image: string;
  alt: string;
  title: string;
  description: string;
}

export interface DriveOption {
  image: string;
  alt: string;
}

export interface Review {
  image: string;
  alt: string;
  title: string;
  description: string;
  link: string;
  imageStyle?: React.CSSProperties;
}

export interface ContactFormData {
  name: string;
  email: string;
  content: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  content?: string;
}

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';
