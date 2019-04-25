class classWrapper {
  constructor(obj) {
    return new (this.myClass())(obj)
  }

  static wrap (obj) {
    return new (this.prototype.myClass())(obj)
  }

  myClass () {
    return class {
      constructor (obj) {
        for (let key in obj) {
          this[key] = obj[key]
        }
      }
    }
  }
}

module.exports = classWrapper
