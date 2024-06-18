import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const DBString: string | undefined = process.env.MONGODB_URI;

if (DBString === undefined)
  throw new Error('No connection string has been set');

//Connect to MongoDB Database
mongoose.connect(DBString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions);

const database = mongoose.connection;

database.on('error', (error) => console.log(error));

database.once('connected', () => console.log('Database connected'));
