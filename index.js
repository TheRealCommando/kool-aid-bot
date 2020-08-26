const Discord = require("discord.js");
const client = new Discord.Client();
const cors = require('cors');
var assets = require("./assets");
const axios = require("axios");
const cheerio = require("cheerio");
const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/drive.readonly', 'https://www.googleapis.com/auth/drive.metadata.readonly'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = 'token.json';
var oAuth2Client;
var drive;

// Load client secrets from a local file.
fs.readFile('credentials.json', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);
  // Authorize a client with credentials, then call the Google Drive API.
  authorize(JSON.parse(content), listFiles);
});


google.options({auth: oAuth2Client});
/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  const {client_secret, client_id, redirect_uris} = credentials.installed;
  oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getAccessToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getAccessToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error retrieving access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

/**
 * Lists the names and IDs of up to 10 files.
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
function listFiles(auth) {
  
  drive = google.drive({version: 'v3', auth});
  return
  drive.files.list({
    pageSize: 100,
    fields: 'nextPageToken, files(id, name)',
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const files = res.data.files;
    if (files.length) {
      console.log('Files:');
      files.map((file) => {
        console.log(`${file.name} (${file.id})`);
      });
    } else {
      console.log('No files found.');
    }
  });
}






console.log(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
const http = require('http');
const express = require('express');
const app = express();

app.use("/assets", assets);

var lookup = "";


app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
  isReady = true;
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var isReady = true;
var inCall = false;
var play = false;
var id;
var url;

client.on("ready", () => {
	console.log("I am ready!");
});

client.on('voiceStateUpdate', (oldMember, newMember) => {

  if (isReady)
  {
  isReady = false;
  let newUserChannel = newMember.voiceChannel;
  let oldUserChannel = oldMember.voiceChannel;


    if(oldUserChannel === undefined && newUserChannel !== undefined) 
    {

       console.log(newMember.id);
      if (newMember.id == 230022757721702400)
      {
            //kev
            newUserChannel.join().then(connection =>{
    		  	const dispatcher = connection.playStream("https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FKev.mp3?1559269766298");
    			  dispatcher.on("end", end => {    			
    				  	newUserChannel.leave();
                isReady = true;
    			    });
    		    }).catch(err => console.log(err));
          
      }
      else if (newMember.id == 431623601725243392)
      {
            //me
            newUserChannel.join().then(connection =>{
    		  	const dispatcher = connection.playStream("https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2Fairhorn.opus?1538712906339");
    			  dispatcher.on("end", end => {    			
    				  	newUserChannel.leave();
                isReady = true;
    			    });
    		    }).catch(err => console.log(err));
          
      }
      else if (newMember.id == 274016923040088064)
      {
            //kyle
            newUserChannel.join().then(connection =>{
    		  	const dispatcher = connection.playStream("https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FB%20U%20S%20I%20N%20E%20S%20S.wav?v=1572570799872");
    			  dispatcher.on("end", end => {    			
    				  	newUserChannel.leave();
                isReady = true;
    			    });
    		    }).catch(err => console.log(err));
          
      }
      else if (newMember.id == 430942842127515650)
      {
            //jonathan
            newUserChannel.join().then(connection =>{
    		  	const dispatcher = connection.playStream("https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FG4TV.mp3?v=1582180600798");
    			  dispatcher.on("end", end => {    			
    				  	newUserChannel.leave();
                isReady = true;
    			    });
    		    }).catch(err => console.log(err));
          
      }
      else if (newMember.id == 468967484368617483)
      {
            //manny
            newUserChannel.join().then(connection =>{
    		  	const dispatcher = connection.playStream("https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FBig%20Show.m4a?1554523287262");
    			  dispatcher.on("end", end => {    			
    				  	newUserChannel.leave();
                isReady = true;
    			    });
    		    }).catch(err => console.log(err));
          
      }
      else if (newMember.id == 350790426850099204)
      {
            //jared
            newUserChannel.join().then(connection =>{
    		  	const dispatcher = connection.playStream("https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FMO%20BAMBA.m4a?v=1561078775691");
    			  dispatcher.on("end", end => {    			
    				  	newUserChannel.leave();
                isReady = true;
    			    });
    		    }).catch(err => console.log(err));
          
      }
      else if (newMember.id == 197527835747942400)
      {
            //sims
            newUserChannel.join().then(connection =>{
    		  	const dispatcher = connection.playStream("https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FVery%20Good.opus?v=1561334342146");
    			  dispatcher.on("end", end => {    			
    				  	newUserChannel.leave();
                isReady = true;
    			    });
    		    }).catch(err => console.log(err));
          
      }
      else if (newMember.id == 401866602942824458)
      {
            //sean
            newUserChannel.join().then(connection =>{
    		  	const dispatcher = connection.playStream("https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FRAID%20SHADOW%20LEGENDS.mp3?v=1580187640519");
    			  dispatcher.on("end", end => {    			
    				  	newUserChannel.leave();
                isReady = true;
    			    });
    		    }).catch(err => console.log(err));
          
      }
      else if (newMember.id == 71393451744169984)
      {
            //mitch
            newUserChannel.join().then(connection =>{
    		  	const dispatcher = connection.playStream("https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FMitchs_Intro.wav?1556508244408");
    			  dispatcher.on("end", end => {    			
    				  	newUserChannel.leave();
                isReady = true;
    			    });
    		    }).catch(err => console.log(err));
          
      }
      else if (newMember.id == 435193821475897375)
      {
            //jacob
            newUserChannel.join().then(connection =>{
    		  	const dispatcher = connection.playStream("https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FHello%20boys.wav?v=1566527689911");
    			  dispatcher.on("end", end => {    			
    				  	newUserChannel.leave();
                isReady = true;
    			    });
    		    }).catch(err => console.log(err));
          
      }
      else if (newMember.id == 104068286253125632)
      {
            //george
            newUserChannel.join().then(connection =>{
    		  	const dispatcher = connection.playStream("https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FSwooce.wav?v=1575340708214");
    			  dispatcher.on("end", end => {    			
    				  	newUserChannel.leave();
                isReady = true;
    			    });
    		    }).catch(err => console.log(err));
          
      }
      else if (newMember.id == 64180675778969600)
      {
            //joey
            newUserChannel.join().then(connection =>{
    		  	const dispatcher = connection.playStream("https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FXPstart.mp3?v=1576540739234");
    			  dispatcher.on("end", end => {    			
    				  	newUserChannel.leave();
                isReady = true;
    			    });
    		    }).catch(err => console.log(err));
          
      }
      else if (newMember.id == 405998288077062144)
      {
            //knisley
            newUserChannel.join().then(connection =>{
    		  	const dispatcher = connection.playStream("https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FYoOoOoO.mp3?v=1579664820435");
    			  dispatcher.on("end", end => {    			
    				  	newUserChannel.leave();
                isReady = true;
    			    });
    		    }).catch(err => console.log(err));
          
      }
      else if (newMember.id == 541362707861864503)
      {
            //mason
            newUserChannel.join().then(connection =>{
    		  	const dispatcher = connection.playStream("https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FD%20O%20N%20T%20S%20T%20O%20P%20T%20H%20E%20P%20A%20R%20T%20Y.mp3?v=1588045879797");
    			  dispatcher.on("end", end => {    			
    				  	newUserChannel.leave();
                isReady = true;
    			    });
    		    }).catch(err => console.log(err));
          
      }
      else
      {
        isReady = true;
      }

    }
    else if(oldUserChannel !== undefined && newUserChannel === undefined) 
    {

      console.log(newMember.id);
      if (newMember.id == 197527835747942400)
      {
            //sims
            oldUserChannel.join().then(connection =>{
    		  	const dispatcher = connection.playStream("https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FSAYONARA.mp3?1557790060307");
    			  dispatcher.on("end", end => {    			
    				  	oldUserChannel.leave();
                isReady = true;
    			    });
    		    }).catch(err => console.log(err));
          
      }
      else if (newMember.id == 350790426850099204)
      {
            //jared
            oldUserChannel.join().then(connection =>{
    		  	const dispatcher = connection.playStream("https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FBRB.opus?1557888432104");
    			  dispatcher.on("end", end => {    			
    				  	oldUserChannel.leave();
                isReady = true;
    			    });
    		    }).catch(err => console.log(err));
          
      }
      else if (newMember.id == 401866602942824458)
      {
            //sean
            oldUserChannel.join().then(connection =>{
    		  	const dispatcher = connection.playStream("https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2Fsean%20exit.mp3?1558752095345");
    			  dispatcher.on("end", end => {    			
    				  	oldUserChannel.leave();
                isReady = true;
    			    });
    		    }).catch(err => console.log(err));
          
      }
      else if (newMember.id == 230022757721702400)
      {
            //kev
            oldUserChannel.join().then(connection =>{
    		  	const dispatcher = connection.playStream("https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FBitches.wav?v=1560567765835");
    			  dispatcher.on("end", end => {    			
    				  	oldUserChannel.leave();
                isReady = true;
    			    });
    		    }).catch(err => console.log(err));
          
      }
      else if (newMember.id == 71393451744169984)
      {
            //mitch
            oldUserChannel.join().then(connection =>{
    		  	const dispatcher = connection.playStream("https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FOuttie500.mp3?v=1561322557219");
    			  dispatcher.on("end", end => {    			
    				  	oldUserChannel.leave();
                isReady = true;
    			    });
    		    }).catch(err => console.log(err));
          
      }
      else if (newMember.id == 64180675778969600)
      {
            //joey
            oldUserChannel.join().then(connection =>{
    		  	const dispatcher = connection.playStream("https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FXPstop.mp3?v=1576540739288");
    			  dispatcher.on("end", end => {    			
    				  	oldUserChannel.leave();
                isReady = true;
    			    });
    		    }).catch(err => console.log(err));
          
      }
      else
      {
        isReady = true;
      }

    } 
    else if(newUserChannel === undefined)
    {

      isReady = true;

    }
    
  }
});

client.on("message", (message) => {
	lookup = message.content;
  console.log(lookup.substring(0,1));
  console.log(lookup);
  if (message == "STOP") 
    {
      var voiceChannel = message.member.voiceChannel;
      voiceChannel.leave();
      
      if (typeof voiceChannel != 'undefined'){
			voiceChannel.join().then(connection =>{
    			const dispatcher = connection.playStream("https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FSTOP.mp3?1546404741432");
    			dispatcher.on("end", end => {    			
    					voiceChannel.leave();
    				  isReady = true;
    			});
    		}).catch(err => console.log(err));
      }
    }
  	else if (message == "S T O P") 
    {
      var voiceChannel = message.member.voiceChannel;
      voiceChannel.leave();
      
      if (typeof voiceChannel != 'undefined'){
			voiceChannel.join().then(connection =>{
    			const dispatcher = connection.playStream("https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FS%20T%20O%20P.m4a?1547621636879");
    			dispatcher.on("end", end => {    			
    					voiceChannel.leave();
    				  isReady = true;
    			});
    		}).catch(err => console.log(err));
      }
    }
  else if (message == ".prune") 
    {
      var voiceChannel = message.member.voiceChannel;
      voiceChannel.leave();
      
      if (typeof voiceChannel != 'undefined'){
			voiceChannel.join().then(connection =>{
    			const dispatcher = connection.playStream("https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FCENSORSHIP.mp3?1558237974040");
    			dispatcher.on("end", end => {    			
    					voiceChannel.leave();
    				  isReady = true;
    			});
    		}).catch(err => console.log(err));
      }
    }
  else if (isReady && lookup.substring(0,2) == "TF")
    {
      console.log("http://www.tf2sounds.com/" + lookup.substring(2, lookup.length));
      var siteurl = "http://www.tf2sounds.com/" + lookup.substring(2, lookup.length)
      var fetchData = async () => {
        const result = await axios.get(siteurl);
        return cheerio.load(result.data);
      };

      var voiceChannel = message.member.voiceChannel;
      if (typeof voiceChannel != 'undefined'){
      voiceChannel.join().then(connection =>{
          const dispatcher = connection.playStream("http://www.tf2sounds.com/" + lookup.substring(2, lookup.length));
          dispatcher.on("end", end => {    			
              voiceChannel.leave();
              isReady = true;
          });
        }).catch(err => console.log(err));
      }
    }
  else if (isReady && message != "" && message != ".") {
      console.log(message);
      console.log(message != "");
    
      isReady = false;
    	play = false;
    	var music = "";
    	var voiceChannel = message.member.voiceChannel;
      //console.log(message.member.voiceChannel);
      var rando = 0;
    
      lookup = message;
      console.log("name contains '" + lookup +".'");
       drive.files.list({            
            q: "name contains '" + lookup +".'"
          }, (err, res) => {
        if (err)
        {
          isReady = true;
          return console.log('xThe API returned an error: ' + err);
        }
          const files = res.data.files;
        if (files.length) 
        {
          if (files[0].name.substring(0,files[0].name.indexOf('.')) == lookup)
          {
          
          id = files[0].id;
          
          drive.files.get({
             fileId: id,
             fields: 'webContentLink'
          }, (errr, resr) => {

                play = true;
    
              if (typeof voiceChannel != 'undefined' && play == true){
                  voiceChannel.join().then(connection =>{
                      console.log(resr.data.webContentLink);
                      const dispatcher = connection.playStream(resr.data.webContentLink);
                      dispatcher.on("end", end => {
                        if (inCall == false)
                        {
                          voiceChannel.leave();
                        }
                        isReady = true
                      });
                    }).catch(err => console.log(err));
                }
                else
                {
                  isReady = true
                }
           
          });
          }
          else
          {
            console.log('No files found.');
            isReady = true
          }
          
        } else {
          console.log('No files found.');
          isReady = true
          voiceChannel.leave();
        }
      
      
    });  
    
    
    
      /*
      if (message == "Random")
      {
        rando = Math.floor(Math.random() * 51) + 1;
        console.log(rando);
      }

    	if (message == "Hey Kool-Aid" || rando == 1)
    	{
    		lookup = message;
        getsound();
        music = url;
    		play = true;
    	}
    	else if (message == "Enemy Spotted" || rando == 2) 
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FEnemySpotted.mp3?1538619726471";
    		play = true
    	}
    	else if (message == "Get In Here")
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FGetInHere.mp3?1538619726757";
    		play = true
    		inCall = true;
    	}
    	else if (message == "Go Away")
    	{
    		if (typeof voiceChannel != 'undefined')
    		{
    			play = false
    			inCall = false;
    			voiceChannel.leave();
    		}
    	}
    	else if (message == "RIP" || rando == 3)
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FRIP.mp3?1538619726410";
    		play = true
    	}
      else if (message == "YoOoOoO" || rando == 4)
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FYoOoOoO.mp3?1538623265174";
    		play = true
    	}
      else if (message == "Fire In The Hole" || rando == 5)
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FFireInTheHole.m4a?1538624795526";
    		play = true
    	}
      else if (message == "Dial Up" || rando == 6)
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FDialUp.mp3?1538712355481";
    		play = true
    	}
      else if (message == "OOF" || rando == 7)
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FOOF.m4a?1538712671431";
    		play = true
    	}
      else if (message == "Airhorn" || rando == 8)
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2Fairhorn.opus?1538712906339";
    		play = true
    	}
      else if (message == "O O F" || rando == 9)
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FO%20O%20F.m4a?1538762713823";
    		play = true
    	}
      else if (message == "I Got Time" || rando == 10)
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FTime.mp3?1538803392984";
    		play = true
    	}
      else if (message == "THICC" || rando == 11)
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FThicc.m4a?1539135042342";
    		play = true
    	}
      else if (message == "SUPER MEAT BOY" || rando == 12)
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FSUPERMEATBOY.mp3?1539137171123";
    		play = true
    	}
      else if (message == "Thot" || rando == 13)
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FThot.m4a?1539140548554";
    		play = true
    	}
      else if (message == "GOTEM" || rando == 14)
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FGOTEM.mp3?1539142261169";
    		play = true
    	}
      else if (message == "G O T E M" || rando == 15)
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FG%20O%20T%20E%20M.m4a?1539142261309";
    		play = true
    	}
      else if (message == "B A Z I N G A" || rando == 16)
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FBAZINGA.mp3?1539412580856";
    		play = true
    	}
      else if (message == "N F L" || rando == 17)
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FN%20F%20L.ogg?1540251295751";
    		play = true
    	}
      else if (message == "Taken" || rando == 18)
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FTaken.m4a?1540257386333";
    		play = true
    	}
      else if (message == "Pal" || rando == 19)
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FPal.opus?1540257579383";
    		play = true
    	}
      else if (message == "W I Z A R D" || rando == 20)
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FW%20I%20Z%20A%20R%20D.opus?1540258179479";
    		play = true
    	}
      else if (message == "WACK" || rando == 21)
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FWACK.ogg?1540522002595";
    		play = true
    	}
      else if (message == "Vietnam" || rando == 22)
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FV%20I%20E%20T%20N%20A%20M.opus?1540429725429";
    		play = true
    	}
      else if (message == "T H O R" || rando == 23)
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FT%20H%20O%20R.ogg?1540792110407";
    		play = true
    	}      
      else if (message == "VIETNAM" || rando == 24)
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FV%20I%20E%20T%20N%20A%20M.mp3?1540959090080";
    		play = true
    	}
      else if (message == "BALLS" || rando == 25)
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FBALLS.m4a?1541640520615";
    		play = true
    	}
      else if (message == "K F C" || rando == 26)
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FK%20F%20C.m4a?1541640520689";
    		play = true
    	}
      else if (message == "BIOSHOCK" || rando == 27)
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FBIOSHOCK.ogg?1541640973451";
    		play = true
    	}
      else if (message == "R O B O T S" || rando == 28)
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FROBOTS.m4a?1542245531826";
    		play = true
    	}
      else if (message == "T A K E M E H O M E" || rando == 29)
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FTAKE%20ME%20HOME.opus?1542245532953";
    		play = true
    	}
      else if (message == "J E T S O N S" || rando == 30)
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FJETSONS.m4a?1542599733428";
    		play = true
    	}
      else if (message == "BOOM" || rando == 31)
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FBOOM.ogg?1542761022021";
    		play = true
    	}
      else if (message == "REAL ESTATE" || rando == 32)
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FREAL%20ESTATE.m4a?1543005340856";
    		play = true
    	}
      else if (message == "ROASTED" || rando == 33)
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FROASTED.m4a?1543460163644";
    		play = true
    	}
      else if (message == "WOOH" || rando == 34)
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FWOOH.wav?1543783348912";
    		play = true
    	}
      else if (message == "OMGWTF" || rando == 35)
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FOMGWTF.mp3?1543808966895";
    		play = true
    	}
      else if (message == "P I R A T E" || rando == 36)
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FP%20I%20R%20A%20T%20E.opus?1544409990618";
    		play = true
    	}
      else if (message == "I M G O N N A S A Y T H E N W O R D" || rando == 37)
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FI%20M%20G%20O%20N%20N%20A%20S%20A%20Y%20T%20H%20E%20N%20W%20O%20R%20D.m4a?1546405202826";
    		play = true
    	}
          else if (message == "TREASON" || rando == 38)
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FTREASON.mp3?1547091273911";
    		play = true
    	}
      else if (message == "T E R I Y A K I" || rando == 39)
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FT%20E%20R%20I%20Y%20A%20K%20I.opus?1547094803592";
    		play = true
    	}      
      else if (message == "S I C K O B A M B A" || rando == 40)
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FS%20I%20C%20K%20O%20B%20A%20M%20B%20A.m4a?1547618997114";
    		play = true
    	}
      else if (message == "SICKO BAMBA" || rando == 41)
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FSICKO%20BAMBA.opus?1547618810656";
    		play = true
    	}
      else if (message == "H O O D" || rando == 42)
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FD%20O%20W%20N%20T%20O%20W%20N.m4a?1547620746920";
    		play = true
    	}
      else if (message == "H E L L O" || rando == 43)
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FH%20E%20L%20L%20O.m4a?1547621096226";
    		play = true
    	}
      else if (message == "U N I V E R S A L" || rando == 44)
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FU%20N%20I%20V%20E%20R%20S%20A%20L.opus?1547621214666";
    		play = true
    	}
      else if (message == "F A S T" || rando == 45)
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FF%20A%20S%20T.m4a?1547621331252";
    		play = true
    	}
      else if (message == "T H X" || rando == 46)
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FT%20H%20X.m4a?1547621424934";
    		play = true
    	}
      else if (message == "Jurassic Park" || rando == 47)
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FJurassic%20Park.opus?1547621570101";
    		play = true
    	}
      else if (message == "X P" || rando == 48)
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FX%20P.opus?1547622112101";
    		play = true
    	}
      else if (message == "Y O U R W E L C O M E" || rando == 49)
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FY%20O%20U%20R%20W%20E%20L%20C%20O%20M%20E.m4a?1547622228283";
    		play = true
    	}
      else if (message == "S U G A R" || rando == 50)
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FS%20U%20G%20A%20R.wav?1547697449198";
    		play = true
    	}
      else if (message == "D E F A U L T" || rando == 51)
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FD%20E%20F%20A%20U%20L%20T.m4a?1549509032006";
    		play = true
    	}
      else if (message == "O  O  F" || rando == 52)
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FO%20%20O%20%20F.ogg?1549679182323";
    		play = true
    	}
      else if (message == "Mission Failed" || rando == 53)
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FMission%20Failed.m4a?1549847106248";
    		play = true
    	}
      else if (message == "Mission Passed" || rando == 54)
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FMission%20Complete.m4a?1549847106178";
    		play = true
    	}
      else if (message == "L E G E N D" || rando == 55)
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FL%20E%20G%20E%20N%20D.mp3?1550449905570";
    		play = true
    	}
      else if (message == "L O L" || rando == 56)
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FL%20O%20L.mp3?1550464779356";
    		play = true
    	}
      else if (message == "OMG" || rando == 57)
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FO%20M%20G.mp3?1550464993130";
    		play = true
    	}
      else if (message == "R I S E" || rando == 58)
    	{
    		music = "https://cdn.glitch.com/b81ffb20-4752-44d0-9954-960d042a9dcb%2FR%20I%20S%20E.wav?1550635241470";
    		play = true
    	}
    
		if (typeof voiceChannel != 'undefined' && play == true){
			voiceChannel.join().then(connection =>{
    			const dispatcher = connection.playStream(music);
    			dispatcher.on("end", end => {
    				if (inCall == false)
    				{
    					voiceChannel.leave();
    				}
    				isReady = true
    			});
    		}).catch(err => console.log(err));
		}
		else
		{
			isReady = true
		}
  */
  	}
});

client.login(process.env.TOKEN);

