/*
//exception handling

throw new Error('error message');
//thats the first method of throwing errors in node.js

//using the try and catch method
*/
try{
    console.log('start try block');
    lalala:
    console.log('end try block');
}catch(err){
    console.log('error message',err)
}