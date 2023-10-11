const { MongoClient } = require('mongodb');
const mongoString = "mongodb+srv://Polak:1234@cluster0.igvovxa.mongodb.net/";

async function main() {

    const client = new MongoClient(mongoString);

    try {


        await client.connect();

        await listDB(client);
    } catch (e) {

        console.error(e)
    } finally {

        await client.close();
    }
}
async function listDB(client) {
    let list = await client.db().admin().listDatabases();
    console.log("Lista baz danych na serwerze:");
    list.databases.forEach(database => {
        console.log("Baza: " + database.name + " ,Rozmiar:" + database.sizeOnDisk);
    });
}

main().catch(console.error);