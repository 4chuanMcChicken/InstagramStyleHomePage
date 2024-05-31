import http from "@/api";
import { ShowCases } from "@/api/interface/index";

export const getAllShowCases = (skip: number, limit: number) => {
  return http.get<ShowCases>(`/api/playGround/showCases/`, { skip, limit });
};
