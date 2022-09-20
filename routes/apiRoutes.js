// dependencies
const path = require('path');
const fs = require('fs');
// const { allowedNodeEnvironmentFlags } = require('process');
const uuid = require('uuid').v4;

module.exports = (app) => {

    let database = JSON.parse(fs.readFileSync('./db/db.json', 'utf8')); // try using __dirname

    app.get('/api/notes', (req, res) => {
        return res.json(database);
    });

    app.post('/api/notes', (req, res) => {
        const note = {...req.body, id: uuid()};

        database.push(note);

        fs.writeFile('./db/db.json', JSON.stringify(note), (err) => {
            if (err) throw err;
        });

        res.json(note);
    });

    app.delete('/api/notes/:id', (req, res) => {
        const noteId = req.params.id;

        for(let i = 0; i < note.length; i++) {
            if(note[i].id === noteId) {
                note.splice(i, 1);
            }
        }

        fs.writeFile('../db/db.json', JSON.stringify(note), (err) => {
            if (err) throw err;
        });

        res.json(note);
    });
}
