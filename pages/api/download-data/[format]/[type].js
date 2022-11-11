import api from "../../../../lib/api";
const js2xmlparser = require("js2xmlparser");

// Generate xml or json for a collection of establishments
export default async function handler(req, res) {
  const {format, type} = req.query;
  const uri = req.url.substring(req.url.lastIndexOf('/') + 1);
  const searchResults = await api.setUri('/' + uri).getResults();
  const results = {};
  const date = new Date;
  results.Header = {
    "ExtractDate": date.toISOString().split('T')[0],
    "ItemCount": searchResults.meta.itemCount,
    "ReturnCode": searchResults.meta.returncode === "OK" ? "Success" : searchResults.meta.returncode,
  }
  results.EstablishmentCollection = {};
  results.EstablishmentCollection.EstablishmentDetail = [];
  searchResults.establishments.forEach(establishment => {
    delete establishment.meta;
    delete establishment.links;
    results.EstablishmentCollection.EstablishmentDetail.push(establishment);
  });
  if (format === 'json') {
    res.status(200).json(results);
  }
  else if (format === 'xml') {
    res.setHeader('Content-Type', 'text/xml')
    res.status(200).send(js2xmlparser.parse(`FHRS${type}`, results))
  }
}