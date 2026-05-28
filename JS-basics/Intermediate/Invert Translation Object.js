let words={
  en: { hello: "Hello", bye: "Goodbye" },
  fr: { hello: "Bonjour", bye: "Au revoir" },
  es: { hello: "Hola" }
}
let result={}
Object.keys(words).forEach((lang)=>{
    Object.keys(words[lang]).forEach((key)=>{
           if (!result[key]) {
            result[key] = {}
        }

         result[key][lang]=words[lang][key]
    })
})

console.log(result)