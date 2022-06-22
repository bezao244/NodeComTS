import express from "express";
import cors from 'cors';
import mongoose, { ConnectOptions } from "mongoose";

export class App {
    private express: express.Application;
    private port = 8000;

    constructor() {
        this.express = express();
        this.listen();
        this.middlewares();
        this.database();
    }
    public getApp() {
        return this.express;
    }
    private middlewares(): void {
        this.express.use(express.json());
        this.express.use(cors());
    }
    private listen(): void {
        this.express.listen(this.port, () => {
            console.log('servidor iniciado');
        });
    }
    private database(): void {
        mongoose.connect('mongodb+srv://bezao:root@cluster0.c3llr.mongodb.net/?retryWrites=true&w=majority',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            } as ConnectOptions);

    }
}