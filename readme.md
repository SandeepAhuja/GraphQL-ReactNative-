## Tech Stack
React-native, Apollo-Server, graphql, MongoDB Atlas

# References
MongoDB Hosting: Database-as-a-Service by mLab: https://mlab.com/
Clusters | Atlas: MongoDB Atlas: https://cloud.mongodb.com/v2/5e81b940bc13d933ad47159c#clusters
How to setup a online Mongo-DB database using mLab.: https://medium.com/@alialhaddad/how-to-setup-a-online-mongo-db-database-using-mlab-24bb583720ba
Beginner’s Guide to GraphQL in React Native & React(1/3)(Updated): https://medium.com/@alialhaddad/beginners-guide-to-graphql-in-react-native-react-1-3-21bd431e0fc7

Load File with mongoimport — MongoDB Atlas: https://docs.atlas.mongodb.com/import/mongoimport/


## Here is a breakdown of our dependencies.
1. apollo-server — Responsible for starting server using graphql. Primarily used for defining shape of dat and fetching it.
2. graphql — Enables the graphql schema language.
3. graphql-tools — Enables the use of (`) for defining your schemas. Can just use backticks or the gql tags from apollo-server.
4. dotenv — Enable a env file, which holds your connection string.

Now setup your package.json with by adding a start property in your scripts property and remove test property, to indicate how your server is ran.

"scripts": {
   "start": "nodemon --watch server --watch package.json server/index.js --exec babel-node --presets es2015,stage-2"
 },
 nodemon(not required) — watch server( Watches server.)
— watch package.json server/index(watches package.json and runs server.)
— exec babel-node(use babel on node.)
— presets es2015,stage-2(watches specific version of ecmescript)


## Server folder
typeDefs.js — file which will hold your type definitions for your schema.
resolvers.js — file which will indicate how the schema’s fields are executed.
connectors.js  — file which will connect to your database and then define your Player model to retrieve data from the database.
index.js  — start building our server, and configure it by creating basic type definitions and resolvers to just to get our server working.
