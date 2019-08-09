class Resource {
  constructor (resourceName, data) {
    this.name = resourceName
    this.data = data
  }

  all() {
    return new Promise((resolve, reject) => {
      resolve(this.data)
      reject({errors: true, msg: 'No hay datos por mostrar', body: []})
    })
  }

}

export default Resource
