import mongoose, { Schema, Document, ObjectId } from 'mongoose';

export interface IFeedback extends Document {
    projectId: ObjectId;
    message: string;
    category: string;
    userEmail?: string;
    createdAt: Date;
}

const FeedbackSchema: Schema = new Schema({
    message: {
        type: Schema.Types.String,
        required: true
    },
    projectId: {
        type: Schema.Types.ObjectId,
        ref: 'Project', required: true
    },
    category: {
        type: Schema.Types.String,
        required: true
    },
    userEmail: {
        type: Schema.Types.String
    },
}, {
    timestamps: true
});


// export model
const FeedbackModel = mongoose.models.Feedback || mongoose.model<IFeedback>('Feedback', FeedbackSchema);
export default FeedbackModel;
