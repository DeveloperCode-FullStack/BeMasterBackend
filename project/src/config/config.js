require('dotenv').config();

module.exports = {
    app: {
        port: process.env.PORT || 4000
    },
    jwt: {
        secret: process.env.SECRET || '0899a46744b95e421bc51944fb4d1ab47b9278752edd84d51d924c8a33fc9a90'
    },
    mysql: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER|| 'root',
        password: process.env.DB_PASSWORD || 'abcd',
        database: process.env.DB_DATABASE || 'be_master'
    }
}