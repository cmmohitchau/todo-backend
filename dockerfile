FROM oven/bun

WORKDIR /usr/src/app

COPY ./package.json ./package.json

COPY ./bun.lock ./bun.lock

RUN bun install

COPY . .

RUN bun prisma generate

EXPOSE 8080

CMD ["bun" , "start"]