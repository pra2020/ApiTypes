import { QueryClientProvider, QueryClient } from "react-query";
import Dog1 from "./Dog1";
import Dog2 from "./Dog2";
import { Suspense } from "react";

const ReactQuery = () => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
      },
    },
  });

  return (
    <Suspense fallback={<h1>Loading..</h1>}>
      <QueryClientProvider client={client}>
        <Dog1 />
        <Dog2 />
      </QueryClientProvider>
    </Suspense>
  );
};

export default ReactQuery;
