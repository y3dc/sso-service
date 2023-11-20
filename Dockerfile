FROM node:20.9.0-alpine as development

WORKDIR /app

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile

COPY tsconfig.json tsconfig.json
COPY nodemon.json nodemon.json
COPY src src

CMD ["pnpm", "start"]