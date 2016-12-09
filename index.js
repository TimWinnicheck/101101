var fs = require('fs');
var elasticsearch = require('elasticsearch');

var path = './Data/';
var file = fs.readdirSync(path);
var count = 0;

var client = new elasticsearch.Client({
  host:'localhost:9200',
  log:'trace'
});

for (var i = 0; i < file.length;i++) {
  var reading = JSON.parse(fs.readFileSync(path+file[i]));
  //console.log(reading);
  for (var j = 0; j < reading.items.length; j++) {
	count++;
    client.index({
      index:'bd',
      type:'user',
      id:count,
      body:{
        salary: reading.items[j].salary,
        snippet: reading.items[j].snippet,
        archived: reading.items[j].archived,
        premium: reading.items[j].premium,
        name: reading.items[j].name,
        area: reading.items[j].area,
        url: reading.items[j].url,
        created_at: reading.items[j].created_at,
        apply_alternate_url: reading.items[j].apply_alternate_url,
        relations: reading.items[j].relations,
        employer: reading.items[j].employer,
        response_letter_required: reading.items[j].response_letter_required,
        published_at: reading.items[j].published_at,
        address: reading.items[j].address,
        department: reading.items[j].department,
        alternate_url: reading.items[j].alternate_url,
        type: reading.items[j].type,
        id: reading.items[j].id
      }
    }, function(err,res) {
      console.log(err);
      console.log(res);
    });

  }
  


}
