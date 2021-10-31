const pgp = require('pg-promise')({});
const cn = 'postgres://postgres:duchi2915@localhost:5432/pastebinclone';
const db = pgp(cn);
module.exports = db ; 

