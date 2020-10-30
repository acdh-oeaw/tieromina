export interface Project {
  id: string;
  name: string;
  subtitle: string;
  tags?: string[];
  thumbnail?: string;
  photos?: string[];
  materials?: string[];
  notes?: string;
  externalLinks?: any[];
}
