const users = [
    {name : 'Nite', hobby : 'sleep', postcode : 10220},
    {name : 'Nit', hobby : 'eat', postcode : 10221},
    {name : 'Noi', hobby : 'walk', postcode : 10222}
]
const {name,hobby,postcode } = users
function getSentences({name,hobby,postcode }){
    return `"My nickname is ${name}, My hobby is ${hobby} and my postcode is ${postcode}" ` 


}
for (const u of users){
    console.log(getSentences(u))

}
