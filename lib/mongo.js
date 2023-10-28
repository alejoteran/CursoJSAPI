const {MongoClient, ServerApiVersion} = require("mongodb");
const config = require('../config');
const { query } = require("express");
const uri = `mongodb+srv://${config.MONGO_USER}:${config.MONGO_PASSWORD}@clusterapi.c9nwhuo.mongodb.net/?retryWrites=true&w=majority`;

class MongoDB{
    client;
    connection;
    constructor(){
        this.client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true   
            }
        });
    }
    async connect(){
        return await this.client.connect();
    }

    async getAll(collection){
        await this.client.connect();
        const users = this.client.db("API").collection(collection);
        return users.find();
    }

    async getOne(collection){
        await this.client.connect();
        const users = this.client.db("API").collection(collection);
        return users.findOne(query);
    }

    //hacer el update, insert, delete
}

module.exports = MongoDB;