export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  role: string;
  tools: string[];
  image: string;
  tags: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
}
