'use strict'
const config = require('./../config.js')

const getData = () => {
  $.ajax({
    url: config.apiUrl + '/books',
    method: 'GET'
  })
}

module.export = {
  getData
}
