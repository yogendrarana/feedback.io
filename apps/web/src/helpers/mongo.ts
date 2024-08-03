import { Types } from 'mongoose';

function serializeDocument(doc: any) {
    const plainObject = doc.toObject ? doc.toObject() : doc;

    // Convert ObjectIds to strings
    Object.keys(plainObject).forEach(key => {
        if (plainObject[key] instanceof Types.ObjectId) {
            plainObject[key] = plainObject[key].toString();
        }
    });

    // Convert dates to ISO strings
    Object.keys(plainObject).forEach(key => {
        if (plainObject[key] instanceof Date) {
            plainObject[key] = plainObject[key].toISOString();
        }
    });

    return plainObject;
}