const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema.js');

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
})
)

app.listen(5000,()=>console.log("hello graph"));