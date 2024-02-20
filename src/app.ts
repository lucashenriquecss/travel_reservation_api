import express from 'express';
import { Request, Response, NextFunction } from 'express';

const app = express()
const port = 3000

app.listen(port, async () => {
  try {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
    console.log(`Example app listening on port ${port}`)
  } catch (error) {
    console.error(error)
  }
});

app.get('/', (req:Request,res:Response)=>{
    res.json({success:"success"})
});