// Read dummy.json

const express=require('express');
const app=express();
const fs=require('fs'); // File System
app.use(express.json());
// Reading a file is asynchronous


// fs.readFile(pathOfFile,encoding,function that you want t execute after file is read)

// fs.readFile("dummy.json","utf-8",function(err,fileData){
//     if(err){
//         console.log("Could not read file",err);
//     }
//     else{
//         console.log(fileData);
//     }
// })

// const data= "The data That you want to write should always be a string";

// fs.writeFile("dummy2.txt",data,"utf-8",function(err){
//     if(err){
//         console.log("Could Not Write Data")
//     }
//     else{
//         console.log("File Written Succesully")
//     }

// })
// fs.appendFile("dummy2.txt","Append Data","utf-8",function(err){
//     if(err){
//         console.log("Could Not Write Data")
//     }
//     else{
//         console.log("File Written Succesully")
//     }

// })

// fs.rm("dummy2.txt",function(err){
//     if(err){
//         console.log("Could Not delete File",err);
//     }
//     else{
//         console.log("File Deleted Succesfully");
//     }
// })

app.post("/todo",function(req,res){
    console.log("Request nody is",req.body);
    const id=new Date().valueOf();
    fs.writeFile(`${id}.json`,JSON.stringify(req.body),"utf-8",function(err){
        if(err){
            res.status(500).send("Could not write file");
        }
        else{
            res.status(200).send("File Written Successfully");
        }
    })
})



app.get("/todo/:todoId",function(req,res){
    fs.readFile(`${req.params.todoId}.json`,"utf-8",function(err,fileData){
        if(err){
            res.status(400).send("Could not read file");
        }
        else{
            res.status(200).send(fileData)
        }
    })
})

//1. Read the file mentioned
//2. If File is present then updtae the data
//3. If file is not present throw error

app.put("/todo/:todoId",function(req,res){
    fs.appendFile(`${req.params.todoId}.json`,JSON.stringify(req.body),"utf-8",function(err){
        if(err){
            res.status(400).send("Could not write file");
        }
        else{
            res.status(200).send("File Written Successfully");
        }
    })
})

app.delete("/todo/:todoId",function(req,res){
    fs.rm(`${req.params.todoId}.json`,function(err){
        if(err){
            res.status(400).send("Could not delete file");
        }
        else{
            res.status(200).send("File Deleted Successfully");
        }
    })
})


app.listen(8080)