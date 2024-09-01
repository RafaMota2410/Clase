const express = require ("express");
const cors = require ("cors");

const PORT = process.env.PORT || 3000;

const app = express ();
app.use (express.json());
app.use (cors());

app.listen(PORT, () =>{
console.log("Server Listening on PORT", PORT);
});

app.get ("/users", (req, res)=>{
    const status = [ {Name: "Emma", Age: "32", Ocupation: "Licenciada"}, 
        {Name: "Eliza", Age: "29", Ocupation: "Contadora"},
        {Name: "Rafa", Age: "29", Ocupation: "Arquitecto"},];
    res.send(status)
    });

app.get ("/users/user1", (req, res)=>{
    const status = [ {Name: "Emma", Age: "32", Ocupation: "Licenciada"}, 
        {Name: "Eliza", Age: "29", Ocupation: "Contadora"},
        {Name: "Rafa", Age: "29", Ocupation: "Arquitecto"},];
    res.send(status)
    });