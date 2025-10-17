import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';

// Create an instance of Apollo Server
// Apollo Server is the GraphQL server that will handle incoming requests
// It requires a schema (typeDefs) and resolvers to know how to process queries
const server = new ApolloServer({
  typeDefs,  // The GraphQL schema we defined
  resolvers, // The functions that resolve the queries
});

// Start the server on port 4000
// startStandaloneServer creates an Express app and starts listening for requests
const startServer = async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀 GraphQL server ready at ${url}`);
};

// Start the server and handle any errors
startServer().catch((error) => {
  console.error('Error starting server:', error);
});
