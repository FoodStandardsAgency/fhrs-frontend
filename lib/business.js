export default function businessNameToUrl(businessName, location = null) {
  if (!businessName.length) {
    businessName = 'unknown'
  }
  if (location) {
    businessName = `${businessName} ${location}`;
  }
  return businessName.replace(/[^a-z0-9 -]/gi, '').replace(/\s+/g, '-').toLowerCase();
}
