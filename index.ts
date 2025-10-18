import express from "express";
import { PrismaClient } from "./generated/prisma";

const app = express();

const prismaClient = new PrismaClient();

app.get("/" , async(req ,res) => {
    const users = await prismaClient.user.findMany();

    res.status(200).json({
        message : "users fetched",
        users
    })
});

app.post("/" , async (req , res) => {
    
    const users = await prismaClient.user.create({
        data : {
            username : "mohit",
            password : "mohit328947"
        }
    })

    res.status(200).json({
        message : "user created",
        username : users.username
    })
})

app.listen(8080 , () => {
    console.log("app is running on port : " , 8080);
    
})