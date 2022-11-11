import api from "../../../../../lib/api";

const js2xmlparser = require("js2xmlparser");

// Generate xml or json for an individual establishment
export default async function handler(req, res) {
  const {format, id} = req.query;
  const searchResults = await api.setUri('/establishments/' + id).getResults();
  const establishment = {};
  const date = new Date;
  establishment.Header = {
    "ExtractDate": date.toISOString().split('T')[0],
    "ItemCount": searchResults.meta.totalCount,
    "ReturnCode": searchResults.meta.returncode === "OK" ? "Success" : searchResults.meta.returncode,
  }
  establishment.EstablishmentCollection = {};
  delete searchResults.meta;
  delete searchResults.links;
  establishment.EstablishmentCollection.EstablishmentDetail = searchResults;
  if (format === 'json') {
    res.status(200).json(establishment);
  } else if (format === 'xml') {
    res.setHeader('Content-Type', 'text/xml')
    res.status(200).send(js2xmlparser.parse('FHRSEstablishment', establishment));
    }
}