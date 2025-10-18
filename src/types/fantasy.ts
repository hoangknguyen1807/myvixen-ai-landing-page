import { Character } from "./character";

interface Tag {
  id: string;
  tag: string;
  slug: string;
  name: string;
}

export interface Fantasy {
  id: string;
  created_at: string;
  user_id: string;
  thumbnail_image_url: string;
  title: string;
  description: string;
  comment: string;
  example_dialogue: string;
  greeting: string;
  tagline: string;
  likes_count: number;
  messages_count: number;
  characters: Character[];
  tags: Tag[];
  is_public: boolean;
  is_nsfw: boolean;
  is_content_violation: boolean;
}