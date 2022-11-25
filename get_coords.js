function fill_with_lat_lon() {
    console.log("Fill with lat lon - Table");
    var table = document.getElementById('table-body');
    if (table) {
        console.log("Processing table elements")
        console.log("There are " + table.rows.length + " rows")
        for (let row of table.rows) 
        {
            let location = row.cells[0].innerText
            console.log("Current location: " + location);

            var url = "https://en.wikipedia.org/w/api.php?action=query&prop=coordinates&titles=" + location + "&format=json&origin=*"; 

            const getJsonData = async() => {
                let data = await fetch(url).then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok')
                    }
                    return response.json();
                })
                .then((json_) => {
                    //console.log("json: ", json_)
                    return json_.query.pages;
                })
                .catch((error) => {
                    console.error('There has been a problem with your fecth operation:', error);
                })
                return data;
            }
            
            const getData = async () => {
                let pages = await getJsonData()
                //console.log("data: ", pages);
                var page = pages[Object.keys(pages)[0]];
                var lat = page.coordinates[0].lat
                var lon = page.coordinates[0].lon
                console.log("Latitute: " + lat);
                console.log("Longitude: " + lon);
                row.cells[1].innerText = lat;
                row.cells[2].innerText = lon;
            }

            getData();
        }
    }
  }