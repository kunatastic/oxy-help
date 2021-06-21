# Authentication n Authorization Template

A Basic JWT based Authorization in NodeJs and React.

## Specification

1. JWT is implemenated and stored as HTTP only cookie in the React Application
2. React Application is Configured with Basic Chakra-UI

## Routes

1. `/auth/` This is a post route to register a new User. Payload contains Email (unique), password, confirm password
2. `/auth/login` This is a post route to check an existing user.
3. `/auth/logout` This is a get route to clear the cookies in the front-end
4. `/auth/loggedin` This is a get route to check the validation of the cookie at the front-end
5. `/auth/hidden` This is a get route which is protected only works when the cookies are provided

## Tech Stack

1. NodeJs (in TypeScript)
2. ReactJs (in TypeScript)
3. MongoDB (DataBase)

## .env file

    PORT = 5000
    MONGODB_URI=mongodb://localhost:27017/auth (local mongoDB URI)
    JWT_SECRET=rjeiorg3234ijo3jeg (any random string)

## Connection between front-end and back-end

The connection is established using the proxy at http://localhost:5000 (Server is running at this port. add this port number in .env file) and the react application is running at http://localhost:3000.

If you are using the proxy for connecting front-end and back-end CORS needed be enables. hence this setup does not have CORS enabled by default.

[@kunatastic](https://www.linkedin.com/in/kunal-kumar-jha/)

## Me me and me

1. [ ] Form completions
2. [ ] Sending and retreiving from the server
