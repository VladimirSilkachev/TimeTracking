const pg = require('pg');
const {query} = require("express");

const cs = 'postgres://postgres:123@localhost:5432/postgres';

const client = new pg.Client(cs);
client.connect();


function getId (name, passworld) {
    return client.query('SELECT * FROM employees where employees.name = $1 and employees.password = $2',
        [name, password], (err, res) => {
        return res.rows.id
    }
}


function registration (name, password) {
    client.query('INSERT INTO employees (name, password ) values ( $1, $2) ', [name, password], (err, res) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Data insert successful');
        client.end();
    });
}

function checkLogin (name, password) {
    return client.query('SELECT * FROM employees  where employees.name = $1 and employees.password = $2', [name, password], (err, res) => {
        let i = 0
        for (let row of res.rows) {
            i = i + 1}
        if (i !== 0) {
            i = 0;
            return res.rows.id}
        else { return 0}
    })
}

function timeStart (id) {
    return client.query('UPDATE timetrack SET "startTime" = $1 where "EmployeeID"=$2', [new Date().toLocaleTimeString(), id],
        (err, res) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('Start time insert successful');
            client.end();
        }

    )}

function breakStart (id) {
        return client.query('UPDATE timetrack SET buffer = $1 where "EmployeeID"=$2', [new Date().toLocaleTimeString(), id],
            (err, res) => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log('Break time insert successful');
                client.end();
            }}

function breakEnd (id) {
    return client.query('UPDATE timetrack SET total = timetrack.total - ($1 - timetrack.buffer) where "EmployeeID"=$2',
        [new Date().toLocaleTimeString(), id],
        (err, res) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('Break ends');
            client.end();
        }}

function endTime (id) {
    return client.query('UPDATE timetrack SET total = $1 - timetrack."startTime" where "EmployeeID"=$2',
        [new Date().toLocaleTimeString(), id],
        (err, res) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('Day ends');
            client.end();
        }}

function getData (id) {
    return client.query('SELECT * FROM timetrack  where employees."ID" = $1', [id]
        const data = res.rows;

        (err, res) => {
            if (err) {
                console.error(err);
                return;
            }

        data.forEach(row => {return (`Id: ${row[4]} Total: ${row[2} `);}
        client.end();
        }}



