db.users.aggregate(
   [
      {
        $group : {
           _id : { year: { $year: "$created_at" }, month: { $month: "$created_at" }, day: { $dayOfMonth: "$created_at"},},
           count: { $sum: 1 },
        }
      }
   ]
)