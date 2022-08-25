"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoModel = void 0;
require("module-alias/register");
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const helmet_1 = __importDefault(require("helmet"));
const dotenv_1 = __importDefault(require("dotenv"));
const http_1 = __importDefault(require("http"));
const _schema_1 = require("@schema");
const cors_1 = __importDefault(require("cors"));
const apollo_server_express_1 = require("apollo-server-express");
const apollo_server_core_1 = require("apollo-server-core");
const _resolvers_1 = require("@resolvers");
const _services_1 = require("@services");
const _config_1 = require("@config");
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const demoSchema = new Schema({
    demo: {
        type: Object,
        required: true,
    },
});
exports.DemoModel = mongoose_1.default.model('Demo', demoSchema);
dotenv_1.default.config();
if (!process.env.PORT) {
    console.log(`Error to get ports`);
    process.exit(1);
}
const PORT = parseInt(process.env.PORT, 10);
const HOST = process.env.HOST || '3000';
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
app.use((0, helmet_1.default)({ contentSecurityPolicy: false }));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.json({
        message: 'OK',
    });
});
app.post('/demo', async (req, res) => {
    const demo = new exports.DemoModel({ demo: req.body });
    await demo.save();
    res.json({
        message: 'OK',
        req: req.body,
    });
});
app.get('/demo', async (req, res) => {
    const demo = await exports.DemoModel.find();
    res.json({
        message: 'OK',
        demo,
    });
});
const apolloServer = new apollo_server_express_1.ApolloServer({
    introspection: true,
    typeDefs: _schema_1.typeDefs,
    resolvers: _resolvers_1.resolvers,
    formatError: _config_1.formatError,
    context: ({ req, res }) => {
        return {
            req,
            res,
            userId: req ? _services_1.Auth.getUserId(req) : null,
            stallCode: req ? _services_1.Auth.getStallCode(req) : null,
        };
    },
    plugins: [
        (0, apollo_server_core_1.ApolloServerPluginLandingPageGraphQLPlayground)(),
        (0, apollo_server_core_1.ApolloServerPluginLandingPageDisabled)(),
    ],
});
const callbackAppListen = () => {
    console.log(`Running on ${HOST}:${PORT} ⚡`);
};
const listeningServer = () => {
    console.log('Express server started on port %s at %s', server.address());
};
apolloServer.start().then(() => {
    (0, _config_1.connect)();
    apolloServer.applyMiddleware({ app, path: '/api/graphql' });
    server.listen(PORT, HOST, 0, callbackAppListen);
    server.on('listening', listeningServer);
});
//# sourceMappingURL=index.js.map