db.getCollection('users').find({
    _id:ObjectId("5a9cbc1c54a8f77d61d5ce7f")
    })
    
db.getCollection('ride_history').find({passengers:{$elemMatch:{"feedback.rating":{$exists:true}}}})
    
    
    
    
    
    
    
    
    
    
    
    
    
