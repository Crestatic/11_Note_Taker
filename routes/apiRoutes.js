// dependencies
const fs = require('fs');
const uuid = require('uuid').v4;

module.exports = (app) => {

    let database = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

    app.get('/api/notes', (req, res) => {
        return res.json(database);
    });

    app.post('/api/notes', (req, res) => {
        const note = {...req.body, id: uuid()};

        database.push(note);

        fs.writeFile('./db/db.json', JSON.stringify(database), (err) => {
            if (err) throw err;
        });

        res.json(database);
    });

    app.delete('/api/notes/:id', (req, res) => {
        const noteId = req.params.id;

        for(let i = 0; i < database.length; i++) {
            if(database[i].id === noteId) {
                database.splice(i, 1);
            }
        }

        fs.writeFile('./db/db.json', JSON.stringify(database), (err) => {
            if (err) throw err;
        });

        res.json(database);
    });
}