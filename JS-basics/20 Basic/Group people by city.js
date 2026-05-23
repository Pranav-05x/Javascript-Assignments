let cities=[
  { name: "A", city: "Delhi" },
  { name: "B", city: "Mumbai" },
  { name: "C", city: "Delhi" }
]

let result={}

cities.forEach(function(person){
   if(result[person.city]){
      result[person.city].push(person.name);
   }
   else{
     result[person.city]=[person.name];
   }
})

console.log(result);