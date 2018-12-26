db.getCollection('ride_history').aggregate([
                            {
                            $match :{ created_at: {
                                $gte: ISODate("2018-10-01T00:00:00.000Z"),
                                $lte: ISODate("2018-10-21T00:00:00.000Z"),
                            }}},
                            {                           
                            $group:{ _id: '$driver._id',
                               total_km: {
                                        $sum: '$total_distance',
                                    },
                               count: {
                                        $sum: 1,
                                    },
                                }
                            }
                     ])