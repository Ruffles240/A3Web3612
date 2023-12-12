# A3Web3612


Here are my 3 APIs.
https://raphs-artists.glitch.me

https://raphs-artists.glitch.me

https://raphs-painting-getter.glitch.me

The files here in this repository are different from the API code as it is meant to be run locally.

https://raphs-painting-getter.glitch.me/api/paintings

https://raphs-painting-getter.glitch.me/api/painting/433

https://raphs-painting-getter.glitch.me/api/painting/43374534856

https://raphs-painting-getter.glitch.me/api/painting/gallery/7

https://raphs-painting-getter.glitch.me/api/painting/gallery/43374534856

https://raphs-painting-getter.glitch.me/api/painting/artist/106

https://raphs-painting-getter.glitch.me/api/painting/artist/43374534856

https://raphs-painting-getter.glitch.me/api/painting/year/1850/1900

https://raphs-painting-getter.glitch.me/api/painting/year/2200/2400

https://raphs-painting-getter.glitch.me/api/painting/title/self

https://raphs-painting-getter.glitch.me/api/painting/title/dfjkghdfkgh

https://raphs-painting-getter.glitch.me/api/painting/color/NAPA

https://raphs-painting-getter.glitch.me/api/painting/color/coffee%20bean

https://raphs-painting-getter.glitch.me/api/painting/color/kcvhvxchbkcj

https://raphs-artists.glitch.me/api/artists

https://raphs-artists.glitch.me/api/artists/Netherlands

https://raphs-artists.glitch.me/api/artists/sdfjjsdf

https://raphs-gallery-api.glitch.me/api/galleries

https://raphs-gallery-api.glitch.me/api/galleries/france

https://raphs-gallery-api.glitch.me/api/galleries/kcvhvxchbkcj



Here are the path instructions, append these to the end of your API(Filling in parameters), to retrieve the data you want.

For the Paintings API

/api/paintings 

Returns JSON for all paintings


/api/painting/id

Returns JSON for the single painting whose id
matches the provided id.


/api/painting/gallery/id 

Returns JSON for the paintings whose gallery id
matches the provided gallery id.


/api/painting/artist/id 

Returns JSON for the paintings whose artist id
matches the provided artist id.


/api/painting/year/min/max

Returns all paintings whose yearOfWork field is
between the two supplied values.


/api/painting/title/text 

Returns JSON for the paintings whose title contains
(somewhere) the provided text. This search should
be case insensitive.


/api/painting/color/name 

Returns JSON for the paintings that have a color that
matches the provided hex value. Each painting has a
dominantColors array with the six most common
colors in the painting; each of these color values
comes with a property named name that contains
the name for that color. This should be case
insensitive.




For the Artists API


/api/artists

Returns JSON for all artists


/api/artists/country 

Returns JSON for all artists from the specified
country. This should be case insensitive.


For the Galleries API

/api/galleries 

Returns JSON for all galleries


/api/galleries/country

Returns JSON for all galleries from the specified
country. This should be case insensitive.
