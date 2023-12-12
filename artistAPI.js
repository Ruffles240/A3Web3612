const path = require('path');
const express = require('express');
const fs = require('fs').promises;
const app = express();



const port=80;

const jsonPathArtists = "artists.json";

/**
 * 
 * @param {
 * } path the path to the data
 * @returns The JSON parsed
 */

async function loadData(path) {
    try {
      const data = await fs.readFile(path);
      return JSON.parse(data);
      
    } catch (err) {
      console.error('Unable to read json data file', err);
      return null;
    }
  }
app.listen(port, () => {
      console.log("Server running at port= " + port);
    });

/**
 * 
 * The request handlers
 */


  loadData(jsonPathArtists).then(artists => {
    if (artists) {

       /**
        *For default paths
        */
        app.get('', (req, resp) => {
            resp.status(404).send("This is Raph's API, please use the /api/ paths specified in this GitHub repository https://github.com/Ruffles240/A3Web3612 to get your data");
          });
         
        
        /**
          *The handler to return all artists
          *
          */
        app.get('/api/artists', (req, resp) => { resp.json(artists); });
        
        /**
          *The handler to search by country 
          *
          */
        app.get('/api/artists/:country', (req, resp) => { 
          
          const filteredArtists = artists.filter(a=> a.Nationality.toLowerCase() == req.params.country.toLowerCase());
          filteredArtists.length ? resp.json(filteredArtists): resp.status(404).send('No Artists in that Country on file')});
        app.get('*', (req, resp) => {
          resp.status(404).send("Invalid paths, please use the /api/ paths specified in this GitHub repository https://github.com/Ruffles240/A3Web3612 to get your data");
        });
        
        /**
         *For invalid paths
         *
         */
        app.get('*', (req, resp) => {
          resp.status(404).send("Invalid paths, please use the /api/ paths specified in this GitHub repository https://github.com/Ruffles240/A3Web3612 to get your data");
        });
      } else {
        console.log("Failed to load data, not starting server");
      }
  });

  