//----------------MONGO------------------------------
import { connect, model, Schema, mongoose } from 'mongoose';

export async function connectMongo() {
  try {
    await connect(
      "mongodb+srv://hugoabrahamv19:nUnEo6GgvLB16DT8@codercluster.foujega.mongodb.net/ecommerce?retryWrites=true&w=majority"
    );
    console.log("Connected to MongoDB");
  } catch (e) {
    console.log(e);
    throw "Not connect to mongo";
  }
}