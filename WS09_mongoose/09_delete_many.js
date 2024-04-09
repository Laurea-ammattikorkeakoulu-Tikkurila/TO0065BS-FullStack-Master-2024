require("dotenv").config();
var mongoose = require("mongoose");
const Opiskelija = require("./modules/opiskelija");
// Määritellään yhteysosoite
var user = process.env.DB_USER
var salis = process.env.DB_PASS
const uri = process.env.MONGODB_URI;
const mongodb_name = process.env.MONGODB_NAME;
const collection_name = process.env.MONGODB_COLLECTION;



// Luodaan yhteys

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Yhteys on muodostettu!");
    const filter = { group: 'Koodarit' };
    await Opiskelija.deleteMany(filter);
    const opiskelija = await Opiskelija.find();

    if (opiskelija.length > 0) {
        console.log("Joku meni pahasti pieleen...");
    } else {
        console.log("Opiskelijat, joiden ryhmä on " + filter.group + " on poistettu");
    }
    console.log(opiskelija);
    mongoose.connection.close();
    console.log("Yhteys on suljettu!");
};

