"use client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const ApolloWrapper = ({ children }: { children: any }) => {
  const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_API_URL,
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloWrapper;
