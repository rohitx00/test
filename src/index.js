import connectDB from "./db/index.js";
import app from "./app.js";


connectDB().
then(()=>{
    app.listen(`${process.env.PORT}` || 8000 ,() => {
        console.log(`server started at : ${process.env.PORT}`);
    } )
}).
catch((err)=>{
    console.log("MongoDb connection failed!!",err);
})

