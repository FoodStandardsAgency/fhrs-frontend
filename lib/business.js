export default function businessNameToUrl(businessName) {
  return businessName.replace(/[^a-z0-9 -]/gi, '').replace(/\s+/g, '-').toLowerCase();
}
