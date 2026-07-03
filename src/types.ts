export interface Track {
  id: string;
  title: string;
  genre: string;
  duration: string;
  audioUrl: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  iconName: string;
  color: string;
}

export interface BookingInquiry {
  name: string;
  email: string;
  phone: string;
  date: string;
  eventType: string;
  location: string;
  details: string;
}
