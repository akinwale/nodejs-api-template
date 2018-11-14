FROM topcoder/topcoder-tco2018-base

RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY config/ /usr/app/config/
COPY src/ /usr/app/src/
COPY test/ /usr/app/test/
COPY package.json /usr/app

RUN npm install

EXPOSE 3000
CMD ["npm", "start"]
