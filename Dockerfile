# Use an official Ruby runtime as a parent image
FROM ruby:3.2.2

# Set the working directory in the container to /app
WORKDIR /app

# Copy the Gemfile and Gemfile.lock into the container
COPY Gemfile Gemfile.lock ./

# Install any needed packages specified in Gemfile
RUN bundle install

# Copy the current directory contents into the container at /app
COPY . /app

# Install Node.js
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get install -y nodejs

# Install Yarn
RUN npm install -g yarn

# Install npm packages
RUN yarn install

# Install tmux
RUN apt-get install -y tmux

# Update apt
RUN apt-get update

# Install Golang
RUN apt-get install -y golang

# Set environment variables for Golang
ENV GOPATH /root/go
ENV PATH $GOPATH/bin:$PATH

# Install overmind
RUN go install github.com/DarthSim/overmind/v2@latest

# Set permissions for scripts in bin directory
RUN chmod +x /app/bin/*

ENV SECRET_KEY_BASE=425da4649284e6de852dc425ed9162960501e83609013111a06e0170cbd0e565bb9e77c43deac0bc97ac522a3587c59ecb4bb25b049f8d6eadd96a7421a1babe

# Precompile assets
RUN RAILS_ENV=production bundle exec rake assets:precompile

# Expose a common port that your application might listen on
EXPOSE 3000

# Run overmind when the container launches
CMD ["overmind", "start", "-f", "Procfile"]
