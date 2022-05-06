const api_url = 'https://api.vam.ac.uk/v2/objects/search?min_length=2&max_length=16&images_exist=true&on_display_at=all&year_made_from=1962&order_sort=asc&page_size=100&cluster_size=20&response_format=json&images=true&random=false'
        async function getData() { //creating get data function
            const response = await fetch(api_url); //Fetching the API URL to be used as a response
            const data = await response.json();  //setting data to equal the response from the API
            const {records} = data; //setting records to be equal to the data
            for (let i = 0; i < 20; i++) { //for loop to increment through the objects
                var container = 'container'+[i]; 
                var image = 'image'+[i];
                var artist = 'artist'+[i];
                var newElement = document.createElement('div');
                newElement.id = container; //creating a container for the grid
                document.getElementById("sectiongrid").appendChild(newElement); //creating a section
                var newElement = document.createElement('img');
                newElement.id = image; newElement.className = "image"; //creating image element 
                document.getElementById(container).appendChild(newElement);
                newElement = document.createElement('a'); //creating the artist name as a link
                newElement.id = artist; newElement.className = "artist";
                document.getElementById(container).appendChild(newElement);
                const imagelink = records[i]._images._primary_thumbnail; //setting the image from records
                const imagelarge = imagelink.replace('!100,100','!200,200') //setting image size
                document.getElementById(image).src = imagelarge; //displaying image
                document.getElementById(image).setAttribute("alt", records[i]._primaryTitle); //setting the image alt as the primary title
                document.getElementById(artist).textContent = records[i]._primaryMaker.name; //setting the artist name 
                document.getElementById(artist).href ='details.html?object='+ records[i].systemNumber; //setting the link to include the system number
            }         
        }
        getData(); //calling get data function