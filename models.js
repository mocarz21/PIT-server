const bookshelf = require('./config/bookshelf');


exports.Certificates = bookshelf.Model.extend({tableName: 'certyfikaty'})
exports.References = bookshelf.Model.extend({tableName: 'referencje'})