import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";
import config from '../../config';
import bcrypt from 'bcrypt';

const userSchema = new Schema<IUser>({
name: {
    type: String, 
    required: true
},
email: {
    type: String, 
    required: [true, "Please provide your email"],
    unique: true,
    validate: {
        validator: function (value: string) {
          return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value)
        },
        message: '{VALUE} is not a valid email',
      },
      immutable: true,
},
role: {
  type: String,
  enum: {
    values: ['customer', 'admin'],
    message: '{VALUE} please provide a valid role.',
  },
  default: 'customer',
  required: true,
},
password: {
    type: String, 
    required: true,
    select: false
}
})
userSchema.pre('save', async function (next) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const user = this; // doc
    // hashing password and save into DB
  
    user.password = await bcrypt.hash(
      user.password,
      Number(config.bcrypt_salt_rounds),
    );
  
    next();
  });
  userSchema.post('save', function (doc, next) {
    doc.password = '';
    next();
  });
const User = model<IUser>('User', userSchema)

export default User