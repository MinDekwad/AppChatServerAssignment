var EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
    name: "Chatevent", // Will use table name `category` as default behaviour.
    tableName: "chatevent", // Optional: Provide `tableName` property to override the default behaviour for table name. 
    columns: {
        id: {
            primary: true,
            type: "int"
            // generated: true
        },
        datetime: {
            type: "bigint"
        }, 
        sender: {
            type: "text"
        },
        message: {
            type: "text"
        },
        roomId:{
            type: "int"
        }
    }
});