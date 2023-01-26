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

export const arraySortedForId = (arr) => {
    arr = arr.slice().sort(((a, b) => {
        if (a.id < b.id) {
          return -1;
        }
        if (a.id > b.id) {
          return 1;
        }
        return 0;
      }))
    return arr
}


export const arraySortedByValues = (arr, values) => {
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