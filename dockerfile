# Use an official Node runtime as a parent image
FROM node:18

# Set the working directory
WORKDIR /my-tech-teachings

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of your application code
COPY . .

# Build your Nuxt application
RUN yarn build

# Expose the port Nuxt runs on
EXPOSE 3000

# Start the Nuxt application
CMD ["yarn", "start"]
