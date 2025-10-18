import axios from "axios";
import { API_CONFIG } from "@/lib/constants";

export const apiInstance = axios.create({
  baseURL: API_CONFIG.baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: parseInt(process.env.NEXT_PUBLIC_API_TIMEOUT || "15000"), // Configurable timeout, default 15 seconds
});