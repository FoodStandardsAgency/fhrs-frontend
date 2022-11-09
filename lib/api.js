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
   *  @param type
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
      case 'ratingOperators':
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
            if (param[1] && !(param[1] === 'all' || param[1] === '-1')) {
              paramArray.push(`${param[0]}=${param[1]}`);
            }
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
  },

  /**
   *  Return the matching authority from the V1 API ID
   *  The V2 API searches on LocalAuthorityId and the V1 API ID is stored as LocalAuthorityIdCode
   *  @param id the v1 id of the local authority
   *  @return object authority details
   */
  getAuthorityFromV1Id(id) {
    return new Promise((resolve, reject) => {
      this.fetchClient().get(`authorities`).then((value) => {
        const authority = value.data.authorities.filter( authority => {
          return authority.LocalAuthorityIdCode === id;
        });
        resolve(authority[0]);
      }).catch((reason) => {
        reject(reason);
      })
    });
  },
  /**
   *  Perform a get request to the fsa ratings api to get data from a business ID;
   *  @param businessId the ID of the business
   *  @return object includes the rating, scheme type
   */
  getBusinessDetails(businessId) {
    return new Promise((resolve, reject) => {
      this.fetchClient().get(`/establishments/${businessId}`).then((value) => {
        const businessDetails = {
          rating: value.data.RatingValue,
          scheme: value.data.SchemeType,
          localAuthority: value.data.LocalAuthorityCode,
        }
        resolve(businessDetails);
      }).catch((reason) => {
        reject(reason);
      })
    });
  }
}

export default api;
