function getCount (count) {
    console.log(count);
    if (count > 1) {
        count = count - 1;
        getCount(count)
    }else {
        return
    }
}

getCount(6);

let persons = {
    name: 'andrei',
    surname: 'nicolai',
    secondPerson: {
        name: 'ilie',
        surname: 'gheorghe',
        firdPerson : {
            name: 'olga',
            surname: 'ion',
            age: 30,
            fourPerson : {
                name: 'valentina',
                lastname: 'andrei'
            }
        }
    }
}



 const searchByProperty = (obj, searchKey, results = []) => {
    const res = results;
    Object.keys(obj).forEach(key => {
       const value = obj[key];
       if(key === searchKey && typeof value !== 'object'){
          res.push(value);
       }else if(typeof value === 'object'){
        searchByProperty(value, searchKey, res);
       }
    });
    return res;
 };
 console.log(searchByProperty(persons, 'name'));

const arr1 = [17, 17, 17, 12, 12, 354, 354, 1, 1, 1];
const arr2 = [16, 16, 16, 12, 12, 353, 353, 1, 1, 1];
const comp = (arr, len = 0, deletable = false) => {
   if(len < arr.length){
      if(deletable){
         arr.splice(len, 1);
         len--;
      }
      return comp(arr, len+1, arr[len] === arr[len+1])
   };
   return;
};
comp(arr1);
console.log(arr1);
comp(arr2);
console.log(arr2);
