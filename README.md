## Welcome to GrapQL API

## Available Scripts

In the project directory, you can run:

### `npm install`

Install the dependencies in the local node_modules folder

### `npm start`

Runs the API and Introspect GraphQL Schema in GraphQL Playground.</br>
Open [http://localhost:4000/graphql](http://localhost:4000/graphql) to view it in the browser.</br>

## `Creating GraphQL graph`

Log into [https://studio.apollographql.com](https://studio.apollographql.com) and create a new graph with `Monolith Architecture`</br>

Keep the `APOLLO_KEY, APOLLO_GRAPH_REF, APOLLO_SCHEMA_REPORTING` handy to publish the Schema (will be used in Heroku during deploy)</br>

Go to Settings (`This Variant-> Explorer-> Add Endpoint` of deployed Heroku link)</br>

GraphQL Playground can only be accessed from `Run in Explorer` button</br>

## `Deploying GraphQL API on Heroku`

Create a New App on Heroku with your Desired name and Region</br>

Connect Github Account and select the Repository</br>

Go to Settings (`Config Vars-> Add APOLLO_KEY, APOLLO_GRAPH_REF, APOLLO_SCHEMA_REPORTING` i.e [key:value] pair)</br>

This will add Schema to Apollo GraphQL Studio</br>

Go to Deploy and do a `Manual Deploy` this will run `npm start`</br>

Your api link [https:<your_app_name>/graphql](https:<your_app_name>/graphql)</br>

## Note: `When Deployed or in Production GraphQL playground will be disabled for Security Concerns and only be accessed from Apollo Studio`

## Thats it you API is up and running..!
