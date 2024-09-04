const asynHandler = (requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).thencatch((err)=>next(err))
    }
}

export {asynHandler}