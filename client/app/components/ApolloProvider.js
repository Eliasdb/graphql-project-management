"use client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const ApolloProviderWrapper = ({ children }) => {
  const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          clients: {
            merge(existing, incoming) {
              return incoming;
            },
          },
          projects: {
            merge(existing, incoming) {
              return incoming;
            },
          },
        },
      },
    },
  });

  const client = new ApolloClient({
    uri: "http://localhost:5001/graphql",
    cache,
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
export default ApolloProviderWrapper;
