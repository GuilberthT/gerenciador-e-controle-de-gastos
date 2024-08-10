import { Schema, model } from 'mongoose';
import { User } from './types/usersTypes';

const UserSchema = new Schema<User>({
    name: String,
    email: String,
    password: String,
});

const User = model<User>('User', UserSchema);

export default User;
