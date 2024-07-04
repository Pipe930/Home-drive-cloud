## Home Drive Cloud 🏠

A small rest api that can save and download files Api Rest, host your own cloud at home.

## Technologies

- Node JS 20.14.0
- Express 4.19.2

### Development Setup

First, you have to download the repository with Git on your computer:

```bash
git clone https://github.com/Pipe930/Home-drive-cloud.git
cd ./Home-drive-cloud
```

### Environment Variables

Now we have to set up the necessary environment variables for the project to run, leave an `.env.example` file for the variables that are needed:

```bash
PATH_CLOUD_STORAGE="/home/user/example"
PORT=3000
```

### Installation Dependencies

With the environment variables set, we need to install the project dependencies:

```bash
npm install
```

### Run Locally

Now that we have the dependencies installed and the environment variables configured, we will run the server locally on your computer:

```bash
npm run dev
```

Running the above command will run the server on port 3000 by default.

### Docker

First, we have to configure the environment variables, I have an example file `.env.example`:

```bash
PATH_CLOUD_STORAGE="/home/user/example"
PORT=3000
```

### Docker Image

Now we will create the docker image for running the server:

```bash
docker compose build
```

### Run Docker

```bash
docker compose up
```

The server will be running on port 3000 by default.
