var fs = require('fs');
var ejs = require('ejs');
var http = require('http');
var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');

var mySqlClient = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});


mySqlClient.connect(function (err) {
    if (err) throw err;
    console.log("Database Connected!");
});

var app = express();

http.createServer(app).listen(3000, function () {
    console.log('MYSQL_HOST: %s', process.env.MYSQL_HOST)
    console.log('Server running');
});

app.get('/', function (req, res) {
    fs.readFile('list.html', 'utf8', function (error, data) {
        if (error) {
            console.log('readFile Error');
        } else {
            mySqlClient.query('select * from employee', function (error, results) {
                if (error) {
                    console.log('error : ', error.message);
                } else {
                    res.send(ejs.render(data, {
                        prodList: results
                    }));
                }
            });
        }
    })
});
app.get('/delete/:id', function (req, res) {
    mySqlClient.query('delete from employee where id = ?', [req.params.id], function (error, result) {
        if (error) {
            console.log('delete Error');
        } else {
            console.log('delete id = %d', req.params.id);
            res.redirect('/');
        }
    });
});
app.get('/insert', function (req, res) {
    fs.readFile('insert.html', 'utf8', function (error, data) {
        if (error) {
            console.log('readFile Error');
        } else {
            res.send(data);
        }
    })
});
app.get('/edit/:id', function (req, res) {
    fs.readFile('edit.html', 'utf8', function (error, data) {
        mySqlClient.query('select * from employee where id = ?', [req.params.id], function (error, result) {
            if (error) {
                console.log('readFile Error');
            } else {
                res.send(ejs.render(data, {
                    product: result[0]
                }));
            }
        });
    });
});
app.use(bodyParser.urlencoded({
    extended: true
}));
app.post('/insert', function (req, res) {
    var body = req.body;
    mySqlClient.query('insert into employee(name, email, dept) values(?, ?, ?)', [body.name, body.email, body.dept], function (error, result) {
        if (error) {
            console.log('insert error : ', error.message);
        } else {
            res.redirect('/');
        }
    });
});
app.post('/edit/:id', function (req, res) {
    var body = req.body;
    mySqlClient.query('update employee set name=?, email=?, dept=? where id=?', [body.name, body.email, body.dept, body.id], function (error, result) {
        if (error) {
            console.log('update error : ', error.message);
        } else {
            res.redirect('/');
        }
    });
});
