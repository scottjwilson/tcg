export interface Project {
  _id: string;
  title: string;
  description: string;
  slug: string;
  mainImage: string;
}

export interface Tech {
  _id: string;
  title: string;
  experience: string;
  slug: string;
}

export interface Service {
  _id: string;
  title: string;
  slug: string;
  serviceDetails: [Detail];
  mainImage: string;
  heroImage: string;
  description: string;
}

interface Detail {
  _id: string;
  title: string;
  content: string;
}
