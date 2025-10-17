// Resolvers define how to fetch the types defined in the schema
// Each resolver function corresponds to a field in the schema
export const resolvers = {
  Query: {
    // Resolver for the 'hello' query field
    // This function is called when a client queries for 'hello'
    // It returns a simple greeting message
    hello: (): string => {
      return 'Hello, GraphQL World!';
    },
  },
};
