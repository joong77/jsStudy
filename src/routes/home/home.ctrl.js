"use strict"



const output = {
    home: (req, res) => {
        res.render("home/index");
    },
};

const process = {
    home: (req, res) => {
        console.log(res);
    }
}





module.exports = {
    output,
    process,
};