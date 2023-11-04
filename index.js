const express = require("express");
const app = express();
//Antes de todas las rutas
app.use(express.json());

const usersRouter = require("./routes/usersRoute");
const authRouter = require("./routes/authRoute");


app.use("/users", usersRouter);
app.use("/auth", authRouter);

app.listen(3000, () =>{
    console.log("el servidor se inicio");
});