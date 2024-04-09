// Otetaan moduuli käyttöön
require("dotenv").config();
var mongoose = require("mongoose");
const Opiskelija = require("./modules/opiskelija");
// Määritellään yhteysosoite
var user = process.env.DB_USER;
var salis = process.env.DB_PASS;
const uri = process.env.MONGODB_URI;

// Luodaan yhteys
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  /* Luodaan uusi opiskelija olio ja tulostetaan sen nimi konsoliin ja tallennetaan tietokantaan*/
  const tupu = new Opiskelija({
    name: "Tupu",
    email: "tupu@laurea.fi",
    age: 2501,
    group: "Koodarit",
  });
  await tupu.save();
  /* Luodaan kaksi uutta opiskelija oliota ja toinen tallennetaan tietokantaan ja toinen kutsuu methodia*/
  const hupu = new Opiskelija({
    name: "Hupu",
    email: "hupu@laurea.fi",
    age: 2500,
    group: "Koodarit",
  });

  await hupu.save();
  const Aku_Ankka = new Opiskelija({
    name: "Aku Ankka",
    email: "aku@laurea.fi",
    age: 230,
    group: "Koodarit",
  });
  Aku_Ankka.osaa();

  mongoose.connection.close();
  console.log("Yhteys on suljettu!");
}
