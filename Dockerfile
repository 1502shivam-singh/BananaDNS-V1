FROM ruby:3.2.2

WORKDIR /app

COPY Gemfile Gemfile.lock ./

RUN bundle install

COPY . /app

RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get install -y nodejs

RUN npm install -g yarn

COPY package.json yarn.lock ./

RUN yarn install

RUN apt-get install -y tmux

RUN apt-get update

RUN apt-get install -y golang

ENV GOPATH /root/go
ENV PATH $GOPATH/bin:$PATH

RUN go install github.com/DarthSim/overmind/v2@latest

RUN chmod +x /app/bin/*

ENV SECRET_KEY_BASE=425da4649284e6de852dc425ed9162960501e83609013111a06e0170cbd0e565bb9e77c43deac0bc97ac522a3587c59ecb4bb25b049f8d6eadd96a7421a1babe

RUN RAILS_ENV=production bundle exec rake assets:precompile

EXPOSE 3000

CMD ["overmind", "start", "-f", "Procfile"]
