import 'module-alias/register';
import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import dotenv from 'dotenv';
import http from 'http';
import { typeDefs } from '@schema';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageDisabled,
} from 'apollo-server-core';
import { resolvers } from '@resolvers';
import { Auth } from '@services';
import { connect, formatError } from '@config';

dotenv.config();
if (!process.env.PORT) {
  console.log(`Error to get ports`);
  process.exit(1);
}
const PORT: number = parseInt(process.env.PORT as string, 10);
const HOST: string = process.env.HOST || '3000';
const app: Express = express();
const server = http.createServer(app);

app.use(helmet({ contentSecurityPolicy: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'OK',
  });
});

const apolloServer = new ApolloServer({
  introspection: true,
  typeDefs,
  resolvers,
  formatError,
  context: ({ req, res }) => {
    return {
      req,
      res,
      userId: req ? Auth.getUserId(req) : null,
      stallCode: req ? Auth.getStallCode(req) : null,
    };
  },
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground(),
    ApolloServerPluginLandingPageDisabled(),
  ],
});

const callbackAppListen = () => {
  console.log(`Running on ${HOST}:${PORT} ⚡`);
};

const listeningServer = () => {
  console.log('Express server started on port %s at %s', server.address());
};

apolloServer.start().then(() => {
  connect();
  apolloServer.applyMiddleware({ app, path: '/api/graphql' });
  server.listen(PORT, HOST, 0, callbackAppListen);
  server.on('listening', listeningServer);
});
