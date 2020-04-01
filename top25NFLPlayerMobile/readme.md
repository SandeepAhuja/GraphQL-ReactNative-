# Dependencies
graphql← Needed when using apollo-client, and writing queries for your graphql server.
graphql-tag ←Used to write queries for your graphql server to retrieve data.
apollo-client-preset← Used to import your Client, Cache, HttpLink, and ApolloProvider to connect your react app to your graphql server.
react-apollo←Used to import components for queries and mutations.
react-navigation←Used to define your screens for your app.

# App.js imports
ApolloProvider← To wrap your root component, you would pass your created ApolloClient instance to your client prop.
ApolloClient← Define your client that will connect to your server.
InMemoryCache← Creates a cache for your Apollo Client.
HttpLink←Links to your GraphQL server, taking an object as an argument to constructor function with a uri argument which will be the url of your GraphQL server.
