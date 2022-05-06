const queryString = window.location.search; //Obtaining the query string
const urlParams = new URLSearchParams(queryString); //Setting query string search parameters
const object = urlParams.get('object') //Obtaining the object from the API
const api_url = 'https://api.vam.ac.uk/v2/object/'+ object +'?response_format=json' //Creating a dynamic link based off the object
        async function getData() { //Creating a function to get the data
            const response = await fetch(api_url); //Fetching the API URL to be used as a response
            const data = await response.json(); //setting data to equal the response from the API
            const {record} = data; //setting record to be equal to the data
            const {meta} = data; //srtting meta to be equal to the data
            const imagelink = meta.images._primary_thumbnail; //setting the image link to the primary thumbnail of the record
            const imagelarge = imagelink.replace('!100,100','!500,500') //setting the image size
            //Calling the data from the API
            document.getElementById('image').src = imagelarge;
            document.getElementById('image').setAttribute("alt", record.titles[0].title);
            document.getElementById('title').textContent = record.titles[0].title;
            document.getElementById('accyear').textContent = record.accessionYear;
            document.getElementById('origin').textContent = record.placesOfOrigin[0].place.text;
            document.getElementById('physicaldescription').textContent = record.physicalDescription;
            document.getElementById('categories').textContent = record.categories[0].text;
            document.getElementById('objecttype').textContent = record.objectType;
            document.getElementById('materials').textContent = record.materials[0].text;
            document.getElementById('collection').textContent = record.collectionCode.text;
        }   
        getData(); //Calling the get data function