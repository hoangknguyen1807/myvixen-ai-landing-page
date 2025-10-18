import { apiInstance } from "./axios";
import { GA_CLIENT_ID } from "@/lib/constants";
import { Fantasy } from "@/types/fantasy";

// "https://chat-app.nectar.ai/v3/fantasies?allow_image_nsfw=true&allow_nsfw=true&ga_client_id=&include_tags=Female&page=1&page_size=16&sort_by=messages"

interface FetchFantasiesParams {
  allowImageNsfw?: boolean;
  allowNsfw?: boolean;
  includeTags?: string;
  page?: number;
  pageSize?: number;
  sortBy?: string;
}

export const fetchFantasies = async ({
  allowImageNsfw,
  allowNsfw,
  includeTags = "Female",
  page = 1,
  pageSize = 16,
  sortBy = "messages",
}: FetchFantasiesParams) => {
  try {
    const response = await apiInstance.get(`/fantasies`, {
      params: {
        allow_image_nsfw: allowImageNsfw,
        allow_nsfw: allowNsfw,
        include_tags: includeTags,
        page: page,
        page_size: pageSize,
        sort_by: sortBy,
        ga_client_id: GA_CLIENT_ID,
      },
    });
    return response.data.fantasies as Fantasy[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log("fetchFantasies error:", error);
    throw new Error(error?.response?.data?.message || error?.message || error);
  }
};
