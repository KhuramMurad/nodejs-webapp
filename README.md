# Node.js WebApp - that displayes "Asalam-o-Alykum!!!" on the web page.

This is a simple Node.js web application that displays "Asalam-o-Alykum!!!" when accessed at `http://localhost:8000`. The application is containerized using Docker and can be easily run inside a Docker container.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
  - [Running with Docker](#running-with-docker)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

Follow these instructions to set up and run the project on your local machine using Docker.

### Prerequisites

Ensure that you have the following installed:

- [Docker](https://www.docker.com/)

### Installation

1. **Clone the repository:**

   Use the following command to clone this repository to your local machine:

   ```
   git clone https://github.com/khurammurad/nodejs-webapp.git
   ```

2. **Navigate to the project directory:**

   ```
   cd nodejs-webapp
   ```

### Running the Application

#### Running with Docker

1. **Build the Docker image:**

   Inside the `nodejs-webapp` directory, run the following command to build the Docker image:

   ```
   docker build -t khurammurad/nodejs-webapp .
   ```

2. **Run the Docker container:**

   After building the image, run the container:

   ```
   docker run -d -p 8000:8000 khurammurad/nodejs-webapp
   ```

3. **Access the application:**

   Open your browser and go to:

   ```
   http://localhost:8000
   ```

   You should see the message: **"Asalam-o-Alykum!!!"**.

### Dockerfile Breakdown

- **`FROM node:15`**: Specifies the base image as Node.js version 15.
- **`ARG PORT=8000`**: Sets a build-time argument to define the port.
- **`ENV PORT=$PORT`**: Exposes the environment variable `PORT`.
- **`WORKDIR src`**: Sets the working directory to `src`.
- **`COPY src src`**: Copies the `src` folder containing the application code.
- **`COPY package.json .`**: Copies the `package.json` file to install dependencies.
- **`RUN npm install`**: Installs the necessary dependencies.
- **`EXPOSE $PORT`**: Exposes the port defined by the `PORT` argument.
- **`CMD npm start`**: Runs the application using the `start` script.

### package.json Scripts

- **`start`**: Uses `nodemon` to automatically restart the server on file changes.
- **`start:prod`**: Starts the server in production mode without `nodemon`.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes.
4. Push to your branch and open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
### Key Changes:
- The instructions now focus on running the app inside a Docker container.
- The **Dockerfile** is explained in the `Dockerfile Breakdown` section.
- Docker commands for building and running the image are added.

Let me know if you need further adjustments!
