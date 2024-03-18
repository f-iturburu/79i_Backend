import {Schema,model} from "mongoose";

const productSchema = new Schema ({
  name :{type:String},
  categoria: {type:Number},
  precio:{type:Number},
  imagen:{type:String}
},
{timestamps:true}
)
export default model ('Product',productSchema)
