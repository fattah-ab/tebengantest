import {createConnection} from "typeorm";
import SuperHero, { User } from "../entity/User";
import Power, { Ride } from "../entity/Ride";
export const connection = createConnection({
    type: "postgres", 
    host: "localhost",
    port:  5432, // default port of postgres
    username: "postgres", // our created username, you can have your own user name
    password: "admin", // our created username, you can have your own password
    database: "tebengan", // our created database name, you can have your own
    entities: [
        // typeORM will not be able to create database table if we forget to put entity class name here..
User, // our SuperHero entity class
        Ride      // our Power entity class
    ],
    synchronize: true,
    logging: false,
    
});