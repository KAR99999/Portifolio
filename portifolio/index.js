import express from 'express';

const app = express();
app.use(express.json());
app.use(express.static('dist/portifolio'));
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

/* app.get('/api/pirates/:id',(req , res)=>{
    const id = req.params.id;
    const pirate = getPirate(id);
    if(!pirate){
        res.status(404).send({error:`pirate ${id} not found`});
    }
    else{
        res.send({data: pirate});
    }

}) */