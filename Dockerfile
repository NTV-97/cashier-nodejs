FROM risingstack/alpine:3.4-v6.9.4-4.2.0

ENV PORT 3000

EXPOSE 3000

COPY package.json package.json
RUN yarn

COPY . .
RUN yarn build
RUN yarn start

CMD ["node", "dist/"]