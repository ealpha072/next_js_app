import mongoose, { Schema, Document } from "mongoose"

interface User{
    username:string,
    email:object,
    password:string,
}

type userDocument = User & Document

const userSchema: Schema<userDocument> = new mongoose.Schema({
	username:String,
	email: {
		type:String,
		required: [true, "Cannot be blank"],
		unique:true
	},
	password:String
})

userSchema.set("toJSON", {
	transform: (document:Document, returnedObject:userDocument):void => {
		returnedObject._id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
		//delete hashed password
		delete returnedObject.password;
	},
});

const User = mongoose.model("user", userSchema)
export default User;