FROM node:10

# RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/agendador
# WORKDIR /app

COPY . .

RUN npm install
RUN npm install -D

COPY --chown=node:node . .

USER node

CMD [ "node", "src/app.js" ]