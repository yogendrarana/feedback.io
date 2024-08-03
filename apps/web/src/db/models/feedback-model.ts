import mongoose, { Schema, Document, ObjectId } from 'mongoose';

export interface IFeedback extends Document {
    project: ObjectId;
    feedback: string;
    type: string;
    email?: string;
    createdAt: Date;
}

const FeedbackSchema: Schema = new Schema({
    feedback: {
        type: Schema.Types.String,
        required: true
    },
    type: {
        type: Schema.Types.String,
        required: true
    },
    email: {
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
