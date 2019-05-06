db.getCollection('ride_history').aggregate([
                            {
                            $match :{ created_at: {
                                $gte: ISODate("2018-09-01T00:00:00.000Z"),
                                $lte: ISODate("2019-04-30T00:00:00.000Z"),
                            },
                            passengers: { $exists: true, $not: {$size: 0} }},
                            },
                            {                           
                            $group:{ _id: null,
                               total_km: {
                                        $sum: '$total_distance',
                                    },
                               count: {
                                        $sum: 1,
                                    },
                                }
                            }

db.getCollection('ride_history').count({ created_at: {
                                $gte: ISODate("2018-09-01T00:00:00.000Z"),
                                $lte: ISODate("2019-04-30T00:00:00.000Z"),
                            },
                            passengers: { $exists: true, $not: {$size: 0} }},{"_id":1})
