function getPhone(phones, search){
    const matched = [];
    for(const phone of phones){
        if(phone.brand.toLowerCase().includes(search.toLowerCase())){
            matched.push(phone);
        }
    }
    return matched;
}

const phones = [
    { brand : 'samsung s23 ultra phone', camera : '24MP', price : 36000, processor : 'android'},
    { brand : 'walton phone', camera : '24MP', price : 18000, processor : 'android'},
    { brand : 'Nothing Phone', camera : '24MP', price : 25000, processor : 'android'},
    { brand : 'lenovo ideapad laptop', camera : '2MP', price : 42000, processor : 'i5'},
    { brand : 'one plus', camera : '30MP', price : 38000, processor : 'android'},
    { brand : 'Iphone', camera : '24MP', price : 86000, processor : 'ios'},
]

const result = getPhone(phones, 'Phone');
console.log(result);