import mongoose from "mongoose";

const uri = 'dentalcenter.zahra20hb.svc:27017'
// const uri = process.env.MONGODB_URI


// if (!process.env.MONGODB_URI) {
  if (!uri) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
}


// const MONGODB_URI = process.env.MONGODB_URI;

if (!uri) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}


async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    // cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
    //   return mongoose;
    // });
    cached.promise = mongoose.connect(uri, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;