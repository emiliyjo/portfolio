// activate airtable object
var Airtable = require("airtable");

var base = new Airtable({ apiKey: "keyNgZNOwpH4aj3ex" }).base(
  "app3Fc7MxpN0Y2XPY"
);

base("Table 1")
  .select({
    // maxRecords:10,
    // view: "Grid view",
  })
  .eachPage(function page(records, fetchNextPage) {
    // console.log("records:", records);
    records.forEach(function (record) {
      // pull my airtable data
      // each record will have its own div
      let airtableItem = document.createElement("div");
      // add some data specific meta to my new divs for filtering
      airtableItem.classList.add("airtable-item");
      airtableItem.setAttribute("data-style", record.fields.Style);

      // create a img tag for my album art

      // create a span for my artist name
      let Name = document.createElement("Name");
      Name.innerHTML = record.fields.Name;
      
        let img = document.createElement("img");
      img.innerHTML = record.fields.img;
      let subject = document.createElement("subject");
        subject.innerHTML = record.fields.subject;
      
      let description = document.createElement("description");
      description.innerHTML = record.fields.description;
      
           let link = document.createElement("link");
      link.innerHTML = record.fields.link;



      // appending to div holding each airtable record
      airtableItem.append(Name);
      airtableItem.append(img);
       airtableItem.append(subject);
          airtableItem.append(description);
                airtableItem.append(link);
       
  
      // append div to body
      document.querySelector('.airtable-items').append(airtableItem);
    });
  });

// set up a event listener for my empowering button
// listen for user clicker, once it is clicker, serach for divs with data-mood, empowering



document.querySelectorAll('.btn-filter').forEach(btn => {
  // console.log('btn', btn)
  btn.addEventListener('click', (event) => {
    console.log('event', event)
    let listofAirtableItems = document.querySelectorAll(".airtable-item");
  
  console.log('listofAirtableItems', listofAirtableItems)

  // search for data-mood, containg Manhattan
  listofAirtableItems.forEach((item) => {
    console.log('item', event.target.dataset.BORO);
    item.classList.remove("hidden");
    // if item.dataset.BORO equal to "Manhattan, then we trigger something
    console.log("div dataset", item.dataset.BORO, "button id",event.target.dataset.BORO);
    if (item.dataset.BORO == event.target.dataset.BORO) {
      // if the div has data-BORO Manhattan, add red background by adding css class
      item.classList.remove("hidden");
      console.log('show',item);
    } else {
      item.classList.add("hidden");
      console.log('hide',item);
    }
  });
  })
})
