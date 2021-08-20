export interface Animal {
  id: number;
  post_date: Date;
  url: string;
  description: string;
  allow_comments: boolean;
  likes: number;
  comments: string;
  userId: number;
}

export type Animais = Array<Animal>;
