import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

// eslint-disable-next-line prefer-const
let cached = (global as any).mongoose  || {conn: null, promise: null}

export const connectToDatabase = async () => {
  if(cached.conn) return cached.conn

  if(!MONGODB_URI) throw new Error('Mongo URI is missing')

  cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
    dbName: 'classifiDev',
    bufferCommands: false,
  })
  cached.conn = await cached.promise

  return cached.conn
}