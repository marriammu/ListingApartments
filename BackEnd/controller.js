const db = require("./databases");

exports.getAllApartments = (req, res) => {
  var sql = "select * from Apartments";

  db.all(sql, (err, records) => {
    if (err) {
      res.status(res.statusCode).json({ error: err.message });
      return;
    }
    console.log(res.statusCode);
    res.status(res.statusCode).json({
      message: "success",
      data: records,
    });
  });
};
exports.getApartment = (req, res) => {
  const itemid = req.params.id;
  var sql = "select * from Apartments WHERE ID = ?";
  db.get(sql, [itemid], (err, records) => {
    if (err) {
      res.status(res.statusCode).json({ error: err.message });
      return;
    }

    if (!records) {
      res.status(res.statusCode).json({ error: "Apartment not found" });
      return;
    }

    res.status(res.statusCode).json({
      message: "success",
      data: records,
    });
  });
};
exports.addApartment = (req, res) => {
  const {
    area,
    space,
    priceRange,
    paymentPlan,
    isFurnished,
    roomCount,
    bedCount,
    compound,
    deliveryDate,
  } = req.body;

  if (!space || !area || !priceRange || !paymentPlan || !roomCount || !bedCount || !deliveryDate) {
    res.status(res.statusCode).json({ error: "Missing required fields" });
    return;
  }
  console.log(req.body);
  var sql =
    "INSERT INTO Apartments (Space,Area,PriceRange,PaymentPlan,IsFurnished,RoomCount,BedCount,Compound,DeliveryDate)\
     VALUES (?,?,?,?,?,?,?,?,?)";

  var parameters = [space, area, priceRange, paymentPlan, isFurnished, roomCount, bedCount, compound, deliveryDate];

  db.run(sql, parameters, function (err) {
    if (err) {
      res.status(res.statusCode).json({ error: err.message });
      return;
    }
    res.status(res.statusCode).json({
      message: "success",
      data: req.body,
    });

  });
};
