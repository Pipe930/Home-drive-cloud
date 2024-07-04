FROM node:20.14.0

WORKDIR /home/drive-cloud

COPY . .

EXPOSE 3000

RUN mkdir -p /home/drive

RUN npm install

CMD ["node", "src/index.js"]
