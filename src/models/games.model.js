import { Schema, model} from 'mongoose';
const gameSchema = new Schema({
    barcode:{
        type: String,
        unique: true,
        required: true
       },
       name_game: String,
       description: String,
       brand: String,
       price: Number,
       cost: Number,
       stock: Number,
       status:Number,
    },{
        versionKey: false,// para que no se inserte en los documentos
        timestamps: true
    });
    export default model('Game', gameSchema);// de momento que yo inserte se va a crear en productSchema