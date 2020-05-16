const server =require('./server');
const Port= 5000;

server.listen(Port, ()=>{
    console.log(`Server is running on ${Port}`);
})

