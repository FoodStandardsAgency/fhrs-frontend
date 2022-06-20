import axios from 'axios';

/**
 *  For requesting data from the food ratings api.
 *  See documentation here: https://api.ratings.food.gov.uk/Help/Index
 */
const api = {
  lang: 'en-GB',
  uri: '',

  /**
   *  Create an axios instance with the default headers.
   *  @return {object} axios client.
   */
  fetchClient() {
    const defaultOptions = {
      baseURL: `https://api.ratings.food.gov.uk/`,
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'x-api-version': '2',
        'Accept-language': this.lang,
        'User-Agent': 'FHRS ratings nextjs'
      },
    };
    // Create instance
    return axios.create(defaultOptions);
  },

  /**
   *  Set the language for the request
   *  @return {object} api object (this).
   */
  setLanguage(lang) {
    this.lang = lang;
    return this;
  },

  /**
   *  Set the type of the request.
   *  @param {object} options to be appended to the uri string.
   *  @param {object} parameters parameters to be appended to the uri string.
   *  @return {object} api object (this).
   */
  setType(type, options = {}, parameters = {}) {
    type = type.toLowerCase();
    let uri = '';
    switch(type) {
      case 'regions':
      case 'authorities':
      case 'businesstypes':
      case 'countries':
      case 'establishments':
        if (options.pageNumber) {
          const pageSize = options.pageSize ? options.pageSize : '10';
          if (options.basic) {
            uri = `/${type}/basic/${options.pageNumber}/${pageSize}`;
          }
          else {
            uri = `/${type}/${options.pageNumber}/${pageSize}`;
          }
        }
        else if (options.basic) {
          uri = `/${type}/basic`;
        }
        else if (options.id) {
          uri = `/${type}/${options.id}`;
        }
        else {
          uri = `/${type}`
        }
        if(type === 'establishments' && Object.keys(parameters).length !== 0) {
          let paramArray = [];
          Object.entries(parameters).forEach(param => {
            paramArray.push(`${param[0]}=${param[1]}`);
          });
          const paramString = paramArray.join('&');
          uri += `?${paramString}`;
        }
        break;
      case 'scoredescriptors':
        if (parameters.establishmentId) {
          uri = type + '?' + 'establishmentId=' + parameters.establishmentId;
        } else {
          uri = type;
        }
        break;
      default:
        uri = '/' + type;
    }
    this.uri = uri;
    return this;
  },

  /**
   *  Perform a get request to the fsa ratings api.
   *  @return {object} data object from the fsa ratings api.
   */
  getResults() {
    return new Promise((resolve, reject) => {
      this.fetchClient().get(this.uri).then((value) => {
        resolve(value.data);
      }).catch((reason) => {
        reject(reason);
      })
    });
  }
}

export default api;
