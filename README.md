# LAB - Class 07

## Project: Bearer Auth Server

### Author: Dina Ayoub

### Links and Resources

- [ci/cd](https://github.com/dinaayoub/basic-auth/actions) (GitHub Actions)
- [back-end server url on heroku](https://dina-bearer-auth.herokuapp.com/)

### Setup

#### `.env` requirements (where applicable)

- `PORT` - Port Number, 3000 for us
- `MONGOOSE_URI` - the uri including username and password to your mongo db
- `SECRET` - the secret to use for creating jwt tokens

#### How to initialize/run your application (where applicable)

- `npm start`

#### How to use this api

- POST /signup accepts a json body or a form with username and password fields and creates them in the db
- POST /signin accepts a username and password in basic auth headers (url encoded password)
- GET /users will list all the users given a valid login token
- GET /secret will allow the user in with a valid login token

NOTE: jwt tokens expire in 24 hours

#### Tests

- `npm test`
- Tests check:
  - valid user can sign up
  - invalid user (no username or pass) cannot sign up
  - valid user can sign in
  - invalid user (wrong username or pass) cannot sign in
  - valid user can use token to sign in
  - invalid user cannot use an invalid token to sign in

#### UML

![Basic Auth UML Diagram](assets/auth-uml.png)

TODO: ![Bearer Auth UML Diagram](assets/uml.png)