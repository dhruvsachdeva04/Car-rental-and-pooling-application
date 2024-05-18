import express from "express";
import mysql from "mysql2";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  ssl: {
    ca: fs.readFileSync(process.env.DB_SSL_CA_PATH),
  },
});

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("hello from backend");
});

app.get("/cars", (req, res) => {
  const q = "SELECT * FROM cars";
  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.json(data);
  });
});

app.get("/cars_pool", (req, res) => {
  const q = "SELECT * FROM cars_pool";
  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.json(data);
  });
});

app.post("/cars", (req, res) => {
  const q =
    "INSERT INTO cars (`vehicle_number`,`vehicle_type`,`company`,`model`,`owner_contact`,`vehicle_state`,`vehicle_city`,`vehicle_region`) VALUES (?)";
  const values = [
    req.body.vehicle_number,
    req.body.vehicle_type,
    req.body.company,
    req.body.model,
    req.body.owner_contact,
    req.body.vehicle_state,
    req.body.vehicle_city,
    req.body.vehicle_region,
  ];
  db.query(q, [values], (err, data) => {
    if (err) {
      //alert("cannot");
      return res.json(err);
      //return res.status(500).json({ message: "Unsuccessful" });
    }

    return res.json("hogya");
  });
});

app.post("/cars_pool", (req, res) => {
  const q =
    "INSERT INTO cars_pool (`vehicle_number`,`vehicle_type`,`company`,`model`,`owner_contact`,`departure_from`,`arrival_at`,`capacity`,`time_of_dep`,`date_of_dep`) VALUES (?)";
  const values = [
    req.body.vehicle_number,
    req.body.vehicle_type,
    req.body.company,
    req.body.model,
    req.body.owner_contact,
    req.body.departure_from,
    req.body.arrival_at,
    req.body.capacity,
    req.body.time_of_dep,
    req.body.date_of_dep,
  ];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);

    return res.json("hogya");
  });
});

app.post("/feedback", (req, res) => {
  const q =
    "INSERT INTO feedback (`vehicle_number`,`review`,`phone_number`,`name`) VALUES (?)";
  const values = [
    req.body.vehicle_number,
    req.body.review,
    req.body.phone_number,
    req.body.name,
  ];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);

    return res.json("hogya");
  });
});

app.delete("/cars/:vehicle_number", (req, res) => {
  const vehicle_number = req.params.vehicle_number; // Use req.params to access URL parameters
  const q = "DELETE FROM cars WHERE vehicle_number=?";
  db.query(q, [vehicle_number], (err, data) => {
    if (err) return res.json(err);
    return res.json("Deleted successfully");
  });
});

app.delete("/cars_pool/:vehicle_number", (req, res) => {
  const vehicle_number = req.params.vehicle_number; // Use req.params to access URL parameters
  const q = "DELETE FROM cars_pool WHERE vehicle_number=?";
  db.query(q, [vehicle_number], (err, data) => {
    if (err) return res.json(err);
    return res.json("Deleted successfully");
  });
});

app.listen(8800, () => {
  console.log("conn successful");
});
