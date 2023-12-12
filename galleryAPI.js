const path = require('path');
const express = require('express');
const fs = require('fs').promises;
const app = express();

const port = 80;

const jsonPathGalleries = "./data/galleries.json";


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
  loadData(jsonPathGalleries).then(galleries => {
    if (galleries) {
  /**
        *For default paths
        */
        app.get('', (req, resp) => {
            resp.status(404).send("This is Raph's API, please use the /api/ paths specified in this GitHub repository https://github.com/Ruffles240/A3Web3612 to get your data");
          });
         
         
         /**
          *The handler to search by return all galleries
          *
          */
        app.get('/api/galleries', (req, resp) => { resp.json(galleries); });
         
         /**
          *The handler to search by country
          *
          */
        app.get('/api/galleries/:country', (req, resp) => { 
          
          const filteredGalleries = galleries.filter(a=> a.GalleryCountry.toLowerCase() == req.params.country.toLowerCase());
          filteredGalleries.length ? resp.json(filteredGalleries): resp.status(404).send('No Galleries in that Country');
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
