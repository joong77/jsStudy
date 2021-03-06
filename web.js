"use stactic"

const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const PORT = 3000;

const home = require("./src/routes/home");

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
//URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 인식오류 문제해결
app.use(bodyParser.urlencoded({ extended: true}));

app.use("/", home); // use => 미들 웨어를 등록해주는 메서드 


app.listen(PORT, ()=>{
    console.log(`sever start : test ${PORT}`);
}) 


