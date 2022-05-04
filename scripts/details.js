const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const object = urlParams.get('object')
const api_url = 'https://api.vam.ac.uk/v2/object/'+ object +'?response_format=json'
        async function getData() {
            const response = await fetch(api_url);
            const data = await response.json();
            const {record} = data;
            const {meta} = data;
            const imagelink = meta.images._primary_thumbnail;
            imagelarge = imagelink.replace('!100,100','!500,500')
            document.getElementById('image').src = imagelarge;
            document.getElementById('title').textContent = record.titles[0].title;
            document.getElementById('accyear').textContent = record.accessionYear;
            document.getElementById('origin').textContent = record.placesOfOrigin[0].place.text;
            document.getElementById('physicaldescription').textContent = record.physicalDescription;
            document.getElementById('categories').textContent = record.categories[0].text;
            document.getElementById('objecttype').textContent = record.objectType;
            document.getElementById('materials').textContent = record.materials[0].text;
            document.getElementById('collection').textContent = record.collectionCode.text;
        }   
        getData();