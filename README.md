# faceit

frontend-coding-challenge

## Test has been completed on Solution branch

## Redux Toolkit

I have used Redux toolkit: https://redux-toolkit.js.org/
I found redux toolkit is easy to use and handle state with less boilerplate set-up and less code.

### Some benefits of using redux toolkit

1. Includes utilities to simplify common use cases like store setup, creating reducers, immutable update logic, and more.
2. Provides good defaults for store setup out of the box, and includes the most commonly used Redux addons built-in.
3. Lets you focus on the core logic your app needs, so you can do more work with less code.

## The Test has been completed with all acceptance criteria and plus some additional

1. The page is responsive, it will adapt the cards depends on the screen size
2. Search will filter tournaments while you type and when you press enter it will fetch the search result

# Todo

- Unit test using Jest

# Frontend Coding Challenge

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and has addtional libraries included:

- [Redux](https://redux.js.org/)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)
- [React Redux](https://react-redux.js.org/)
- [styled-components](https://styled-components.com/)
- [polished](https://polished.js.org/)

Head over to the coding challenge [here](./CHALLENGE.md).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Starts the fake REST API server on [http://localhost:4000](http://localhost:4000) and runs the app in development mode on [http://localhost:3000](http://localhost:3000).

#### Notes

- The page will reload if you make edits.
- You will also see any TypeScript or lint errors in the console.
- You can re-run the script to reset/regenerate the data.

### `yarn start:web`

```sh
yarn start:web
```

Runs the app in development mode on [http://localhost:3000](http://localhost:3000).

#### Notes

- The page will reload if you make edits.
- You will also see any TypeScript or lint errors in the console.

### `yarn start:api`

```sh
yarn start:web
```

Starts the fake REST API server on [http://localhost:4000](http://localhost:4000).

#### Notes

- You can re-run the script to reset/regenerate the data.

## Fake REST API

Running on [http://localhost:4000](http://localhost:4000).

### `/tournaments`

#### GET

Get a list of tournaments.

##### Query Parameters

###### `q`

Type: `string`

Search tournaments by any value

##### Response Example

```json
[
  {
    "id": "79218e94-91fd-4420-8278-f453574b97c4",
    "name": "Veritatis Quam Facilis",
    "organizer": "Rerum Perspiciatis",
    "game": "Rocket League",
    "participants": {
      "current": 206,
      "max": 256
    },
    "startDate": "2020-02-27T11:28:02.233Z"
  },
  {
    "id": "042fddd8-882f-4dd3-9cf1-ff82a3c8be9f",
    "name": "Cum Eveniet Quibusdam",
    "organizer": "Id",
    "game": "Dota 2",
    "participants": {
      "current": 168,
      "max": 256
    },
    "startDate": "2020-02-27T11:28:02.233Z"
  },
  {
    "id": "2eb5d07a-8ce5-4b36-8c0f-76b55701d9cc",
    "name": "Numquam Fuga Totam",
    "organizer": "Quaerat Dolorem",
    "game": "Dota 2",
    "participants": {
      "current": 256,
      "max": 256
    },
    "startDate": "2020-02-27T11:28:02.233Z"
  }
]
```

#### POST

Create a tournament.

##### Request Example

```json
{
  "name": "Foo"
}
```

##### Response Example

```json
{
  "id": "2b86b928-a0b5-4dec-8b5a-5f3519790829",
  "name": "Foo",
  "organizer": "Voluptas",
  "game": "League of Legends",
  "participants": {
    "current": 204,
    "max": 256
  },
  "startDate": "2020-02-27T11:36:27.047Z"
}
```

### `/tournaments/:id`

#### PATCH

Edit a tournament.

##### Request Example

```json
{
  "name": "Bar"
}
```

##### Response Example

```json
{
  "id": "2b86b928-a0b5-4dec-8b5a-5f3519790829",
  "name": "Bar",
  "organizer": "Voluptas",
  "game": "League of Legends",
  "participants": {
    "current": 204,
    "max": 256
  },
  "startDate": "2020-02-27T11:36:27.047Z"
}
```

#### DELETE

Delete a tournament.

##### Response Example

```json
{}
```


