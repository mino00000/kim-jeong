FROM mino00/nodejs_test:1.0
WORKDIR /app

COPY package.json /app
COPY . /app
RUN npm install

EXPOSE 3000

CMD ["npm", "start"]