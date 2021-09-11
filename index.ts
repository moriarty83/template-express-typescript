import express, {Application, Request, Response} from "express";
import { request } from "http";

const app: Application = express();
const port: number = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    res.send("Hello World")
    });

app.listen( port, ()=>{
    console.log("listening on ", port)
})