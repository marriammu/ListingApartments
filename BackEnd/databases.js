var sqlite3 = require("sqlite3").verbose();
const Databases = "Database.db";
let db = new sqlite3.Database(Databases, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("Connected to the Database database in sqlite.");
    db.run(
      `CREATE TABLE IF NOT EXISTS Apartments (
        ID INTEGER PRIMARY KEY AUTOINCREMENT,
        Space VARCHAR,
        Area TEXT,
        PriceRange VARCHAR,
        PaymentPlan VARCHAR,
        IsFurnished VARCHAR,
        RoomCount VARCHAR,
        BedCount VARCHAR,
        Compound VARCHAR,
        DeliveryDate  VARCHAR)`,
      console.log("Table Created"),
      (err) => {
        if (err) {
          console.log(err);
        }
      }
    );
  }
});

module.exports = db;
