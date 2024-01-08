import Layout from "@/components/Layout";
import { AppProps } from "next/dist/shared/lib/router/router";
import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";

const App = ({ Component, pageProps }: AppProps) => {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
};

export default App;
