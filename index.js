// Read dummy.json

const express=require('express');
const app=express();
const fs=require('fs'); // File System

// Reading a file is asynchronous


// fs.readFile(pathOfFile,encoding,function that you want t execute after file is read)

fs.readFile("dummy.json","utf-8",function(err,fileData){
    if(err){
        console.log("Could not read file",err);
    }
    else{
        console.log(fileData);
    }
})