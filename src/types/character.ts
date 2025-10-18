export interface Character {
  id: string;
  username: string;
  name: string;
  profile_pic_url: string;
  banner_pic_url: string;
  biography: string;
  description: string;
  greeting: string;
  tagline: string;
  gender: "male" | "female" | "anime";
  is_public: boolean;
  bundle_ids: string[] | null;
  creator_id: string;
  archived: boolean;
  category: "male" | "female" | "anime";
  images_enabled: boolean;
  legacy: boolean;
  from_image: boolean;
  physical_description: string;
  author_comment: string;
  is_nsfw: boolean;
  voice: string | null;
  face_location: {
    height: number;
    left: number;
    top: number;
    width: number;
  };
  is_content_violation: boolean;
  is_pending_review: boolean;
  message_count: number;
}
