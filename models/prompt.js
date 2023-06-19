import  {Schema, model, models} from "mongoose";

const PromptSchema = new Schema ({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },

    prompt: {
        type: String,
        required: [true, 'Link to your property listing is required']
    },
    
    tag: {
        type: String,
        required: [true, 'This is required']
    }
});

const Prompt = models.Prompt || model('Prompt', PromptSchema);
export default Prompt;