const obj = {
  name: 'obj',
  getName: function () {
    return this.name
  },
}
console.log(obj.getName()) // obj

const getName = obj.getName
console.log(getName()) // undefined
