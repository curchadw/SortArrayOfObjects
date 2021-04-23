const library = [    {       title:  'The Road Ahead',       author: 'Bill Gates',       libraryID: 1254   },   {       title: 'Walter Isaacson',       author: 'Steve Jobs',       libraryID: 4264   },   {       title: 'Mockingjay: The Final Book of The Hunger Games',       author: 'Suzanne Collins', libraryID: 3245 }];


// const sortArrayObj = (array) =>{
//    array.sort(compare)

//    return array
// }


// const compare = (a=0,b=0)=>{
//   const titleA = a.title.toUpperCase()
//   const titleB = b.title.toUpperCase()

//   // const authorA = a.author.upperCase()
//   // const authorB = b.author.upperCase()

//   // const idA = a.libraryID
//   // const idB = b.libraryID

//   let comparison = 0;

//       if (titleA > titleB){
//         comparison = 1
//       } else if (titleA < titleB){
//         comparison = -1
//       }

//       return comparison


// }

// console.log(sortArrayObj(library))


const sortByType = (array,type) =>{
    array.sort(compare2(type))

    return array
}


const compare2 = (a=0,b=0,type)=>{
  
  
  const titleA = a.title
  const titleB = b.title

  const authorA = a.author
  const authorB = b.author

  const idA = a.libraryID
  const idB = b.libraryID

  let comparison = 0;
  
  if (type == 'title'){
      if (titleA > titleB){
        comparison = 1
      } else {
        comparison = -1
      }

      return comparison
  }


  if (type == 'author'){
    if (authorA > authorB){
      comparison = 1
    } else {
      comparison = -1
    }

    return comparison
  }


  if (type == 'id'){
    if (idA > idB){
      comparison = 1
    } else {
      comparison = -1
    }

    return comparison
  }

     

}

console.log(sortByType(library,'id'))









