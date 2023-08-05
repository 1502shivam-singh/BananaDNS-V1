FROM ruby:3.2.2

RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs

RUN npm install -g yarn

WORKDIR /app

COPY Gemfile Gemfile.lock ./
RUN bundle install

COPY . .

RUN gem install overmind
ENV PATH /usr/local/bundle/bin:$PATH

# Set PORT environment variable
ENV PORT 3000

CMD ["overmind", "start", "-f", "Procfile"]