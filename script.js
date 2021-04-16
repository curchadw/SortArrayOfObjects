const library = [    {       title:  'The Road Ahead',       author: 'Bill Gates',       libraryID: 1254   },   {       title: 'Walter Isaacson',       author: 'Steve Jobs',       libraryID: 4264   },   {       title: 'Mockingjay: The Final Book of The Hunger Games',       author: 'Suzanne Collins', libraryID: 3245 }];


const sortArrayObj = (array) =>{
   array.sort(compare)

   return array
}


const compare = (a,b)=>{
  const titleA = a.title.toUpperCase()
  const titleB = b.title.toUpperCase()

  // const authorA = a.author.upperCase()
  // const authorB = b.author.upperCase()

  // const idA = a.libraryID
  // const idB = b.libraryID

  let comparison = 0;

      if (titleA > titleB){
        comparison = 1
      } else if (titleA < titleB){
        comparison = -1
      }

      return comparison


}

console.log(sortArrayObj(library))


// list.sort((a, b) => (a.color > b.color) ? 1 : (a.color === b.color) ? ((a.size > b.size) ? 1 : -1) : -1 )






