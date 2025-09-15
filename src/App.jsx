import { BrowserRouter } from "react-router";
import { CustomRoutes } from "./routes/Routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { REACT_QUERY_CONFIG } from "./lib/constants/queryConfig";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: REACT_QUERY_CONFIG.DEFAULT,
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <BrowserRouter>
        <CustomRoutes />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
