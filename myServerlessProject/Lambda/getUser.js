const {Response} = require('./Api_Response')

exports.handler =async event=>{
    console.log("event",event)
    
    if (!event.pathParameters || !event.pathParameters.ID){
        return Response._400({message:"missing the ID from the path"})
    }
    let ID=event.pathParameters.ID;

    if (data[ID]){
        return Response._200(data[ID])
    }
    return Response._400({message:"no ID in data"})
}

const data={
    123:{name:"surya",age:"24",gender:"male"},
    249:{name:"vamsi",age:"29",gender:"male"},
    808:{name:"pavan",age:"28",gender:"male"},
};