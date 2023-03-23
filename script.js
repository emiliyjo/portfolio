// activate airtable object
var Airtable = require("airtable");

var base = new Airtable(
  {apiKey:"keyDd4ipeCQWl3r7x"}
).base("app8mVXPpMc3jUhsk");

base("Table 1").select({
    maxRecords: 5,
    // view: "Grid view",
}).eachPage(
  function page(records, fetchNextPage){
    console.log("records:", records); 
    records.forEach(
      function (record) {
        // pull my airtable data 
        // each record will have its own div
        let airtableItem = document.createElement("div");
        // add some data specific meta to my new divs for filtering
        airtableItem.classList.add("airtable-item");
        airtableItem.setAttribute("data-mood", record.fields.Mood);
        
        
        // create a img tag for my album art 
        let albumCover = document.createElement("img");
        albumCover.src = record.fields.AlbumCover[0].url;
        // create a span for my artist name 
        let artistName = document.createElement("span");
        artistName.innerHTML = record.fields.ArtistName;
        
        // appending to div holding each airtable record 
        airtableItem.append(albumCover);
        airtableItem.append(artistName);
       // append div to body 
        document.body.append(airtableItem);
      }
    
    )
  }
); 

// set up a event listener for my empowering button 
// listen for user clicker, once it is clicker, serach for divs with data-mood, empowering 

// get our button using css ID 
// assign a event listener to my button to listen for click
let empoweringFilterBtn = document.getElementById("filter-empowering");
empoweringFilterBtn.addEventListener("click", function(event){
  console.log(event);
  
  
  
});


