// This is a model for todo

// id, title, description, createdDate, modifiedDate

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({

    title: { type: String, required: 'Title is required' },
    description: { type: String, required: 'Description is required' },
    isCompleted: { type: Boolean, default: false },
    createdDate: { type: Date, default: Date.now },
    modifiedDate: { type: Date, default: Date.now }
},
    { versionKey: false },

);

schema.virtual('id', () => this._id.toHexString());
schema.set('toJSON', { virtuals: true });

const model = mongoose.model('todo', schema);

export default model;

