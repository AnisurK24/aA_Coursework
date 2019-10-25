FROM node:10-alpine

# RUN mkdir -p /app

WORKDIR /app
COPY . /app

RUN npm install
# apt-get update \
# && apt-get upgrade -y \
# && apt-get install -y nodejs ssh mysql \


# mysql & sshd &

CMD  ["npm", "start"]