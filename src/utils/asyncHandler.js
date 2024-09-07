const asyncHandler = (requestHandler)=>{
    return (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).then().catch((err)=>next(err))
    }
}


export {asyncHandler}