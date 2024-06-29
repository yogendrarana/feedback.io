import mongoose, { Document, ObjectId, Schema } from "mongoose";

// project schema 
export interface IProject extends Document {
    name: string;
    projectId: string;
    description?: string;
    owner: ObjectId;
}

const projectSchema: Schema = new Schema<IProject>({
    name: {
        type: Schema.Types.String,
        required: true
    },
    description: {
        type: Schema.Types.String,
    },
    projectId: {
        type: Schema.Types.String,
        required: true,
        unique: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
})


// export model
const ProjectModel = mongoose.models.Project || mongoose.model<IProject>('Project', projectSchema);
export default ProjectModel;