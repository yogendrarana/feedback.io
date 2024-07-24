import mongoose, { Schema, Document, ObjectId } from 'mongoose';

export interface IFeedback extends Document {
    project: ObjectId;
    message: string;
    category: string;
    sender?: string;
    createdAt: Date;
}

const FeedbackSchema: Schema = new Schema({
    message: {
        type: Schema.Types.String,
        required: true
    },
    category: {
        type: Schema.Types.String,
    },
    sender: {
        type: Schema.Types.String,
        require: true
    },
    project: {
        type: Schema.Types.ObjectId,
        ref: 'Project', 
        required: true  
    },
}, {
    timestamps: true
});


// export model
const FeedbackModel = mongoose.models.Feedback || mongoose.model<IFeedback>('Feedback', FeedbackSchema);
export default FeedbackModel;
