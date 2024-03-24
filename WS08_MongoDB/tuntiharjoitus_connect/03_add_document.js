const {MongoClient} = require('mongodb');
require('dotenv').config();

async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/drivers/node/ for more details
     */
    //const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>/sample_airbnb?retryWrites=true&w=majority";
    const uri = process.env.MONGODB_URI;
    /**
     * The Mongo Client you will use to interact with your database
     * See https://mongodb.github.io/node-mongodb-native/3.6/api/MongoClient.html for more details
     * In case: '[MONGODB DRIVER] Warning: Current Server Discovery and Monitoring engine is deprecated...'
     * pass option { useUnifiedTopology: true } to the MongoClient constructor.
     * const client =  new MongoClient(uri, {useUnifiedTopology: true})
     */
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls

        // Create a single new listing
        await createListing(client,
            {
                name: "Nuorison huoneisto",
                summary: "Täydellinen paikka nuorille bilettäjille",
                bedrooms: 1,
                bathrooms: 1
            }
        );
  
        // Create 3 new listings
        await createMultipleListings(client, [
            {
                name: "Loputon näköala Tikkurilaan",
                summary: "Nauti loputtomista näkymistä Tikkurilaan tässä upeassa asunnossa",
                property_type: "Kerrostalo",
                bedrooms: 5,
                bathrooms: 4.5,
                beds: 5
            },
            {
                name: "Yksiö Helsingin keskustassa",
                property_type: "Apartment",
                bedrooms: 1,
                bathroom: 1
            },
            {
                name: "Kaunis huvila meren rannalla",
                summary: "Kaunis huvila meren rannalla, jossa on upeat näkymät auringonlaskuun",
                bedrooms: 4,
                bathrooms: 2.5,
                beds: 7,
                last_review: new Date()
            }
        ]);
    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}

main().catch(console.error);

/**
 * Create a new Airbnb listing
 * @param {MongoClient} client A MongoClient that is connected to a cluster with the sample_airbnb database
 * @param {Object} newListing The new listing to be added
 */
async function createListing(client, newListing){
    // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#insertOne for the insertOne() docs
    const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertOne(newListing);
    console.log(`New listing created with the following id: ${result.insertedId}`);
}

/**
 * Create multiple Airbnb listings
 * @param {MongoClient} client A MongoClient that is connected to a cluster with the sample_airbnb database
 * @param {Object[]} newListings The new listings to be added
 */
async function createMultipleListings(client, newListings){
    // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#insertMany for the insertMany() docs
    const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertMany(newListings);

    console.log(`${result.insertedCount} new listing(s) created with the following id(s):`);
    console.log(result.insertedIds);
}