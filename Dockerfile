# node:slim image is used to reduce images size from 940 Mbs
FROM node:slim
ARG PORT=8000
ENV PORT=$PORT
WORKDIR src
COPY src src
COPY package.json .
RUN npm install
EXPOSE $PORT
CMD npm start

