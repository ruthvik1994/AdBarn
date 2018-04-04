module.exports = {
    dev: {
        port: process.env.PORT || 3000,
        db: "mongodb://152.46.20.123/testgridfs",
        localDB: "mongodb://localhost:27017/testgridfs" // TODO : Remove this in the end. Only for debugging purpose
    }
};