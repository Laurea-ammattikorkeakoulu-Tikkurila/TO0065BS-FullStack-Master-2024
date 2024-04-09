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
  const miska = new Opiskelija({
    name: "Miska",
    email: "miska@laurea.fi",
    age: 25,
    group: "Koodarit",
  });
  console.log(miska.name);
  await miska.save();
  /* Luodaan kaksi uutta opiskelija oliota ja toinen tallennetaan tietokantaan ja toinen kutsuu methodia*/
  const Jani = new Opiskelija({
    name: "Jani",
    email: "jani@laurea.fi",
    age: 25,
    group: "Koodarit",
  });

  await Jani.save();
  const Ari_Pekka = new Opiskelija({
    name: "Ari_Pekka",
    email: "apk@laurea.fi",
    age: 23,
    group: "Koodarit",
  });
  Ari_Pekka.osaa();

  mongoose.connection.close();
  console.log("Yhteys on suljettu!");
}
