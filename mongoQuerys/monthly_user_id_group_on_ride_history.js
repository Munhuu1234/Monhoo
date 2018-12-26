db.getCollection('ride_history').aggregate([                           
                            {                           
                            $group:{ _id: {year: { $year: "$created_at" },
                                           month: { $month: "$created_at" },
                                           user_id:'$driver._id'},
                               total_km: {
                                        $sum: '$total_distance',
                                    },
                               count: {
                                        $sum: 1,
                                    },
                                }
                            }
                     ])