import { Schema, model, models, Document } from "mongoose";

export interface IPost extends Document {
  _id: string;
  name: string;
  description: string;
  price: string;
  tel: string;
  category: { _id: string; name: string };
  createdBy: {_id: string, firstName: string, lastName: string};
}

const PostSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  tel: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  createdBy: { type: Schema.Types.ObjectId, ref: "User" },
});

const Post = models.Post || model("Post", PostSchema);

export default Post;
