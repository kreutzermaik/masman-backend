import express from 'express';
import bodyParser from 'body-parser';
import pool from './config/db.config';
import cors from 'cors';

class Server {
    private app;

    constructor() {
        this.app = express();
        this.config();
        this.routerConfig();
        this.dbConnect();
    }

    private config() {
        this.app.use(bodyParser.urlencoded({ extended:true }));
        this.app.use(bodyParser.json({ limit: '1mb' })); // 100kb default
        this.app.use(cors());
    }

    private dbConnect() {
        pool.connect(function (err: any, client: any, done: any) {
            if (err) throw new Error(err);
            console.log('Connected');
        });
    }

    private routerConfig() {
        this.app.use(require('./routes'))
    }

    public start = (port: number) => {
        return new Promise((resolve, reject) => {
            this.app.listen(port, () => {
                resolve(port);
            }).on('error', (err: Object) => reject(err));
        });
    }
}

export default Server;
