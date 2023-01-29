export const arraySortedAlphabetically = (arr) => {
    arr = arr.slice().sort(((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      }))
    return arr
}

export const arraySortedByMaxAttack = (arr) => {
  arr = arr.slice().sort(((a,b) => b.attack - a.attack))
  return arr
}

export const arraySortedForId = (arr) => {
    arr = arr.slice().sort((a, b) => {
        if (a.id < b.id) {
          return -1;
        }
        if (a.id > b.id) {
          return 1;
        }
        return 0;
      })
    return arr
}

export const arrayCreatedByUser = (arr) => {
  arr = arr.filter(pokemon => pokemon.id > 40)
  return arr
}

export const arrayFilterForType = (arr,type) => {
  arr = arr.filter(pokemon => pokemon.pokemonTypes[0].name === type || (pokemon.pokemonTypes[1] !== undefined && pokemon.pokemonTypes[1].name === type))
  return arr
}

export const arraySortedByValues = (arr, values) => {
  if (values.CreatedByUser === true){
    arr = arrayCreatedByUser(arr)
  }
  if(values.types !== "anyType"){
    arr = arrayFilterForType(arr, values.types)
  }
  if (values.attack === true){
    arr = arraySortedByMaxAttack(arr)
  }
  if (values.alphabetically === true){
    arr = arraySortedAlphabetically(arr)
  }
  if (values.id === true){
    arr = arraySortedForId(arr)
  }
  if (values.reverse === true){
    arr = arr.slice().reverse()
  }
  return arr

}