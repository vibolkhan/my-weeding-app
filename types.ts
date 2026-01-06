
export enum View {
  WELCOME = 'welcome',
  INVITATION = 'invitation',
  MEMORIES = 'memories',
  STORY = 'story',
  RSVP = 'rsvp'
}

export interface TimelineEvent {
  title: string;
  date: string;
  location: string;
  description: string;
  images: string[];
  tag?: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  type: 'ceremony' | 'reception' | 'pre-wedding';
  caption?: string;
  isFeature?: boolean;
}
