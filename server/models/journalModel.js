import mongoose from "mongoose";

const journalsSchema = mongoose.Schema({
    title: {type: String , required : true},
    content: {type: String , required: true},
})

export default mongoose.model("journals" , journalsSchema);