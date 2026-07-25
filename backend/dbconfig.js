import { MongoClient } from "mongodb";
const url = "mongodb+srv://praveenkumar955895_db_user:Praveen-2001@cluster0.1jqg4n1.mongodb.net/?appName=Cluster0";
const dbName = "todo_db";
export const collectionName = "todo";
const client = new MongoClient(url);

export const connection = async () => {
    const connect = await client.connect();
    return await connect.db(dbName);
}
