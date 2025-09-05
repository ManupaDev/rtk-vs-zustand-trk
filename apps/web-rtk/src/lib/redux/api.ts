// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { TBoard, TCardItem } from "@workspace/types";

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
    createCard: build.mutation<
      TCardItem,
      {
        boardId: string;
        columnId: string;
        data: { title: string; priority?: string | null };
      }
    >({
      query: ({ boardId, columnId, data }) => ({
        url: `boards/${boardId}/columns/${columnId}/cards`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: (result, error, { boardId }) => [
        { type: "Board", id: boardId },
      ],
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetBoardsQuery, useGetBoardByIdQuery, useCreateCardMutation } = Api;
