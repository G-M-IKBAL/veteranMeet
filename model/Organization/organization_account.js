import { Schema, model, models } from 'mongoose';

const organizationAccountSchema = new Schema({
    email: { type: String },
    password: { type: String },
    name_of_org: { type: String },
    category: { type: String },
    contact: { type: String },
    city: { type: String }
})


// const Events = models.organization_account || model('Organization_account', Organization_account);

const Organization_accounts = models.organization_account || model('organization_account', organizationAccountSchema);

export default Organization_accounts;
