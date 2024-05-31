const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb+srv://AIDM7450:123321@cluster0.ise6fkg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        //Execute the updateListingByName function in main()
        await updateListingByName(client, "http://www.google.com",
         { src: "http://localhost:3000/newsReport" });
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function updateListingByName(client, nameOfListing, updatedListing) {
    const result = await client.db("LPL_champions").collection("reports")
        .updateMany({ src: nameOfListing }, { $set: updatedListing });
    console.log(`${result.matchedCount} document(s) matched the query criteria.`);
    console.log(`${result.modifiedCount} document(s) was/were updated.`);
}

main().catch(console.error);