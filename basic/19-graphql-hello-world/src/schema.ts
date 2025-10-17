import gql from 'graphql-tag';

// Define the GraphQL schema using GraphQL schema language
// This schema defines the structure of our API and what queries are available
export const typeDefs = gql`
  type Query {
    # A simple hello world query that returns a greeting message
    hello: String
  }
`;
