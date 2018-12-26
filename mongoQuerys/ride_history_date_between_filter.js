db.getCollection("ride_history").find({
    created_at: {
        $gte: ISODate("2018-09-24T00:00:00.000Z"),
        $lt: ISODate("2018-09-27T00:00:00.000Z")
    }
})
