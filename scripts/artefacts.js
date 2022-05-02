const api_url = 'https://api.vam.ac.uk/v2/objects/search?min_length=2&max_length=16&images_exist=true&on_display_at=all&year_made_from=1962&order_sort=asc&page_size=100&cluster_size=20&response_format=json&images=true&random=false'.split(',');
        async function getData() {
            const response = await fetch(api_url);
            const data = await response.json();
            const {records} = data;
            for (let i = 0; i < 10; i++) {
                var newElement = document.createElement('img');
                newElement.id = "image"+[i]; newElement.className = "image";
                document.body.appendChild(newElement);
                newElement = document.createElement('a');
                newElement.id = "title"+[i]; newElement.className = "title";
                document.body.appendChild(newElement);
                var image = 'image'+[i];
                var title = 'title'+[i];
                document.getElementById(image).src = records[i]._images._primary_thumbnail;
                document.getElementById(title).textContent = records[i]._primaryMaker.name;
                document.getElementById(title).href ='artefact.html?object='+ records[i].systemNumber;
            }         
        }
        getData();