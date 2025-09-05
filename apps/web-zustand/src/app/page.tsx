import Workspace from "@/components/Workspace";
import { boardsKeys, getBoardById } from "@/lib/api/boards";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default async function Page() {
  const queryClient = new QueryClient();

  const id = "1";

  await queryClient.prefetchQuery({
    queryKey: boardsKeys.board(id),
    queryFn: ({ queryKey }) => getBoardById(queryKey[1]),
  });

  return (
    // Neat! Serialization is now as easy as passing props.
    // HydrationBoundary is a Client Component, so hydration will happen there.
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Workspace boardId={id} />
    </HydrationBoundary>
  );
}
