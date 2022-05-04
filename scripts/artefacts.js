const api_url = 'https://api.vam.ac.uk/v2/objects/search?min_length=2&max_length=16&images_exist=true&on_display_at=all&year_made_from=1962&order_sort=asc&page_size=100&cluster_size=20&response_format=json&images=true&random=false'
        async function getData() {
            const response = await fetch(api_url);
            const data = await response.json();
            const {records} = data;
            for (let i = 0; i < 100; i++) {
                var container = 'container'+[i];
                var image = 'image'+[i];
                var artist = 'artist'+[i];
                var newElement = document.createElement('div');
                newElement.id = container;
                document.getElementById("sectiongrid").appendChild(newElement);
                var newElement = document.createElement('img');
                newElement.id = image; newElement.className = "image";
                document.getElementById(container).appendChild(newElement);
                newElement = document.createElement('a');
                newElement.id = artist; newElement.className = "artist";
                document.getElementById(container).appendChild(newElement);
                const imagelink = records[i]._images._primary_thumbnail;
                const imagelarge = imagelink.replace('!100,100','!200,200')
                document.getElementById(image).src = imagelarge;
                document.getElementById(image).setAttribute("alt", records[i]._primaryTitle);
                document.getElementById(artist).textContent = records[i]._primaryMaker.name;
                document.getElementById(artist).href ='artefact.html?object='+ records[i].systemNumber;
            }         
        }
        getData();