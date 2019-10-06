import axios from 'axios';
import EventEmitter from '../utils/EventEmitter';
import systemConfig from '../config/system';

class customerService extends EventEmitter {

    constructor() {
        super();

        this.setDefaults();
    }

    setDefaults = () => {
        axios.defaults.headers.common['Content-Type'] = 'application/json';
        axios.defaults.headers.common['Accept'] = 'application/json';
    }; 

    createNewCustomer = ({ name, email, password }) => {
        return new Promise((resolve, reject) => {
            axios.post(`${systemConfig.serverBaseUrl}/customers`, {
                name,
                email,
                password
            }).then(response => {
              if(response.data.customer) {
                sessionStorage.setItem('USER-KEY', response.data.accessToken);
                resolve(response.data.user);
              }
              // error occurred
              resolve(response)
            }).catch((error) => {
                reject(error.response);
            });
        });
    };

    loginCustomer = ({ email, password }) => {
      return new Promise((resolve, reject) => {
          axios.post(`${systemConfig.serverBaseUrl}/customers/login`, {
              email,
              password
          }).then(response => {
            console.log(response)
            if(response.data.customer) {
              sessionStorage.setItem('USER-KEY', response.data.accessToken);
              resolve(response.data.user);
            }
            // error occurred
            resolve(response) 
          }).catch((error) => {
              reject(error.response);
          });
      });
  };

  getCustomerById = (token) => {
    return new Promise((resolve, reject) => {
        axios.get(`${systemConfig.serverBaseUrl}/customer`, {headers: {"Authorization" : token},}).then(response => {
            resolve(response.data)
        }).catch((error) => {
            reject(error.response);
        });
    });
};

  updateCustomerDetails = ({ name, email, day_phone, eve_phone, mob_phone }) => {
    return new Promise((resolve, reject) => {
        axios.post(`${systemConfig.serverBaseUrl}/customers`, {
            name,
            email,
            day_phone,
            eve_phone,
            mob_phone
        }).then(response => {
            resolve(response.data.user);
        }).catch((error) => {
            reject(error.response);
        });
    });
  };

  updateCustomerAddress = ({ address_1, address_2, city, region, postal_code, shipping_region_id }) => {
    return new Promise((resolve, reject) => {
        axios.post(`${systemConfig.serverBaseUrl}/customers`, {
            address_1,
            address_2,
            city,
            region,
            postal_code,
            shipping_region_id,
        }).then(response => {
            resolve(response.data.user);
        }).catch((error) => {
            reject(error.response);
        });
    });
  };

  updateCustomerCreditCard = ({ credit_card }) => {
    return new Promise((resolve, reject) => {
        axios.post(`${systemConfig.serverBaseUrl}/customers`, {
            credit_card
        }).then(response => {
            resolve(response.data.user);
        }).catch((error) => {
            reject(error.response);
        });
    });
  };
}

const instance = new customerService();

export default instance;