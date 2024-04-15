export interface Data {
  success: boolean;
  user: User;
}

export interface User {
  about: About;
  _id: string;
  username: string;
  email: string;
  role: string;
  timeline: Timeline[];
  skills: Skill[];
  youtube: Youtube[];
  projects: Project[];
  social_handles: SocialHandle[];
  services: Service[];
  testimonials: Testimonial[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface About {
  name: string;
  title: string;
  subTitle: string;
  description: string;
  quote: string;
  exp_year: string;
  address: string;
  some_total: string;
  phoneNumber: string;
  contactEmail: string;
  avatar: Avatar;
  alternateAvatars: AlternateAvatar[];
}

export interface Avatar {
  public_id: string;
  url: string;
}

export interface AlternateAvatar {
  public_id: string;
  url: string;
}

export interface Timeline {
  company_name: string;
  summary: string;
  sequence: number;
  startDate: string;
  endDate: string;
  jobTitle: string;
  jobLocation: string;
  bulletPoints: string[];
  forEducation: boolean;
  enabled: boolean;
  _id: string;
  icon?: Icon;
}

export interface Icon {
  public_id: string;
  url: string;
}

export interface Skill {
  enabled: boolean;
  name: string;
  sequence: number;
  percentage: number;
  image: Image;
  _id: string;
}

export interface Image {
  public_id: string;
  url: string;
  _id?: string;
}

export interface Youtube {
  url: string;
  title: string;
  sequence: number;
  image: any;
  embedId: string;
  enabled: boolean;
  _id: string;
}

export interface Project {
  liveurl: string;
  githuburl: string;
  title: string;
  sequence: number;
  image: Image2;
  description: string;
  techStack: string[];
  _id: string;
  enabled: boolean;
}

export interface Image2 {
  public_id: string;
  url: string;
}

export interface SocialHandle {
  platform: string;
  url: string;
  image: Image3;
  enabled: boolean;
  _id: string;
}

export interface Image3 {
  public_id: string;
  url: string;
}

export interface Service {
  name: string;
  charge: string;
  desc: string;
  enabled: boolean;
  _id: string;
  image: Image4;
}

export interface Image4 {
  public_id: string;
  url: string;
  _id?: string;
}

export interface Testimonial {
  image: Image5;
  name: string;
  review: string;
  position: string;
  enabled: boolean;
  _id: string;
}

export interface Image5 {
  public_id: string;
  url: string;
}
