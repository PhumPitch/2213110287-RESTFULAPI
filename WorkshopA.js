const user = {
name : 'Pitchayaphum',
nickname : 'Phum',
hobby : 'listen to the music',
address : '85 Nasan Rd.',
province : {
    province : 'Songkhla',
    postcode : '90000'
}

}

const {name, nickname,hobby,address,province:{province},province:{postcode}} = user

const showData = () => {
    let nickName = 'My nickname is'
    let hobbyTXT = 'My hobby is'
    let postcodeTXT = 'my postcode is'

    return`
    ${nickName} ${nickname}, ${hobbyTXT} ${hobby}
    and ${postcodeTXT} ${postcode}
    `
}

let nickName = 'My nickname is'
let hobbyTXT = 'My hobby is'
let postcodeTXT = 'my postcode is'

function getSentence({nickname,hobby,province:{postcode}}){
    return ` 
    ${nickName} ${nickname}, ${hobbyTXT} ${hobby}
    and ${postcodeTXT} ${postcode}
    `
}
console.log(postcode)
console.log(getSentence(user))