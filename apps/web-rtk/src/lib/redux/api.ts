// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { TBoard } from "@workspace/types";

// Define a service using a base URL and expected endpoints
export const Api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3002/api/" }),
  tagTypes: ["Boards", "Board"],
  endpoints: (build) => ({
    getBoards: build.query<TBoard[], void>({
      query: () => `boards`,
      providesTags: ["Boards"],
    }),
    getBoardById: build.query<TBoard, string>({
      query: (id) => `boards/${id}`,
      providesTags: (result, error, id) => [{ type: "Board", id }],
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetBoardsQuery, useGetBoardByIdQuery } = Api;
