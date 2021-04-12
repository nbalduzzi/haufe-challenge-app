![alt text](https://pngimg.com/uploads/rick_morty/rick_morty_PNG40.png)

# Haufe Challenge APP

Haufe Challenge Single Page Application with React/Redux-Saga.

# Main Stack

1. [react](https://es.reactjs.org/) - For build interactive user interfaces
2. [redux-saga](https://redux-saga.js.org/) - For helping to handle the side effects and have control of the tasks and executions
3. [react-router / react-router-dom](https://reactrouter.com/) - To handle the routing and history.

# Considerations

1. The `.env.production` file is in the repository and the information inside is the same as `.env.development` for challenge purpose, but this must not be like this. The production enviroment variables must be in some `vpc` or some secured storage and encrypted, and must be injected (or replaced) on deploy step.

# Plugins

1. [Infinite Scoll](https://www.npmjs.com/package/react-infinite-scroller) plugin for loading the characters by scrolling down.

2. [Image Lazy Load](https://www.npmjs.com/package/react-lazy-load-image-component) plugin for generate a blured image on load event.

## Installation

1. Use the package manager [npm](https://www.npmjs.com/) to install the application dependencies.

```bash
# Install dependencies
npm install
```

## Development

### Running Server
To run the server in dev mode you need to execute the command:

```bash
npm start
```

> This command will start the server on port 3000 by default

## Production
To generate an optimized production build you need to execute:
```bash
npm run build
```

To serve it with a static server:
```bash
npm install -g serve
serve -s build
```

> The command before should start the app on port 5000

## How to use?

1. Create an user on `http://localhost:3000/register`

2. Back to [login](http://localhost:3000/login) or navigate to `http://localhost:3000/login` and complete the login form data with created user info.

3. Have fun!

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
