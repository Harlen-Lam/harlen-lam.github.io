var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodeParser = bodyParser.urlencoded({ extended: false });

const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://AIDM7450:123321@cluster0.ise6fkg.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function findDocuments() {
    try {
        await client.connect();
        const database = client.db('LPL_champions');
        const reports = database.collection('reports');
        const players = database.collection('players');
        // execute query
        const result = await reports.find({}).toArray();
        for (var i = 0; i < result.length; i++) {
            if(result[i].team == 'IG') {
                team_IG['src'].push(result[i]['src']);
                team_IG['reports'].push(result[i]['report']);
            } else if(result[i].team == 'FPX') {
                team_FPX['src'].push(result[i]['src']);
                team_FPX['reports'].push(result[i]['report']);
            } else if(result[i].team == 'EDG') {
                team_EDG['src'].push(result[i]['src']);
                team_EDG['reports'].push(result[i]['report']);
            }
        }
        const player_result = await players.find({}).toArray();
        for (var i = 0; i < player_result.length; i++) {
            player_ALL.push(player_result[i]);
        }
    } catch (error) {
        console.log('Error:', error);
        throw error;
    } finally {
        await client.close();
    }
}

var team_IG = {src: [], reports: []};
var team_FPX = {src: [], reports: []};
var team_EDG = {src: [], reports: []};
// name, team, src, href
var player_ALL = [];
findDocuments();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/figures'));
app.use(express.static(__dirname + '/video'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/pages/index.html');
})

// get
app.get('/team', (req,res)=>{
    res.sendFile(__dirname + '/pages/team.html');
})

app.get('/playerInfo',(req,res)=>{
	res.sendFile('/pages/information of player.html',{root:__dirname})
})

app.get('/newsReport',(req,res)=>{
	res.sendFile('/pages/News_report.html',{root:__dirname})
})

app.post('/getPlayers', urlencodeParser, function (req, res) {
    res.send(player_ALL);
})

app.post('/getReports', urlencodeParser, function (req, res) {
    if(req.body.team == 'IG') {
        res.send(team_IG);
    } else if(req.body.team == 'FPX') {
        res.send(team_FPX);
    } else if(req.body.team == 'EDG') {
        res.send(team_EDG);
    }
})

app.listen(3000);