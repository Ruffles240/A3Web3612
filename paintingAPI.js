const path = require('path');
const express = require('express');
const fs = require('fs').promises;
const app = express();

const port = 80;


const jsonPathPaintings = "./data/paintings-nested.json";


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
loadData(jsonPathPaintings).then(paintings => {if (paintings) {
        
  /**
    *The handler to get all of the paintings
    *
    */
  app.get('/api/paintings', (req, resp) => { resp.json(paintings); });
  /**
    *The handler to search by ID
    *
    */
  app.get('/api/painting/:id', (req, resp) => {
    const painting = paintings.find(p => p.paintingID == req.params.id);
    painting ? resp.json(painting) : resp.status(404).send('Painting not found');
  });
  /**
    *The handler to search by Gallery ID
    *
    */
  app.get('/api/painting/gallery/:id', (req, resp) => {
    const galleryPaintings = paintings.filter(p => p.gallery.galleryID == req.params.id);
    galleryPaintings.length ? resp.json(galleryPaintings): resp.status(404).send('No Paintings for that Gallery');
  });
  /**
    *The handler to search by title
    *
    */
  app.get('/api/painting/title/:text', (req, resp) => {
    const titlePaintings = paintings.filter(p => p.title.toLowerCase().includes(req.params.text.toLowerCase()));
    titlePaintings.length ? resp.json(titlePaintings): resp.status(404).send('No Paintings matching that Search');
  });
  /**
    *The handler to search by artist ID
    *
    */

  app.get('/api/painting/artist/:id', (req, resp) => {
    const artistPaintings = paintings.filter(p => p.artist.artistID == req.params.id);
    artistPaintings.length ? resp.json(artistPaintings): resp.status(404).send('No Paintings for that Artist');
   
  });
  /**
    *The handler to search by year range
    *
    */
  app.get('/api/painting/year/:min/:max', (req, resp) => {
    const { min, max } = req.params;
    const yearFilteredPaintings = paintings.filter(p =>
      p.yearOfWork >= parseInt(min) && p.yearOfWork <= parseInt(max)
    );
    yearFilteredPaintings.length ? resp.json(yearFilteredPaintings): resp.status(404).send('No Paintings for that range');
  });

  
} else {
  console.log("Failed to load data, not starting server");
}
  
  });

