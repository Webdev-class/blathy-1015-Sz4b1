let customers = [
    {id:1, name:"Lannie Huddlestone", age:71, address:{city:"Kuala Terengganu", street:"7678 5th Parkway", house:177}, newsLetter: false},
    {id:2, name:"Filip Eslie", age:43, address:{city:"Hingatungan", street:"3 Farwell Lane", house:148}, newsLetter: true},
    {id:3, name:"Tally Birchett", age:54, address:{city:"Ciudad del Este", street:"03 Marcy Drive", house:155}, newsLetter: false},
    {id:4, name:"Tera Knotte", age:27, address:{city:"Chon Buri", street:"34811 Dixon Center", house:146}, newsLetter: true},
    {id:5, name:"Conn Sponder", age:55, address:{city:"Beberon", street:"38256 Elmside Court", house:91}, newsLetter: true},
    {id:6, name:"Margaret Hevey", age:80, address:{city:"Liuhe", street:"789 Vernon Center", house:59}, newsLetter: false},
    {id:7, name:"Jilli Tunnick", age:87, address:{city:"Linton", street:"6555 Kennedy Alley", house:62}, newsLetter: true},
    {id:8, name:"Casey Peevor", age:39, address:{city:"Linton", street:"6555 Kennedy Alley", house:62}, newsLetter: false},
    {id:9, name:"Ashlie Wozencraft", age:23, address:{city:"Espinosa", street:"78 Pepper Wood Terrace", house:11}, newsLetter: false},
    {id:10, name:"Jonas Tungate", age:83, address:{city:"Padangulaktanding", street:"224 Manley Drive", house:49}, newsLetter: true}
]
function isAddress(address) {    
    if (typeof(address["city"]==="string") && typeof(address["street"]==="string") && typeof(address["house"])==="number"){
        return true;
    }else{
        return false;
    }
}

function isCustomer(name, age, address, newsLetter) {    
    let answer = false;
    if(typeof(name)==="string"){
        if(typeof(age)==="number"){
            if(typeof(address)==="object"){
                if(typeof(newsLetter)==="boolean"){
                    answer=true;
                }
            }
        }
    }
    return answer;
}
function modifyCustomer (customer){
     let third_helper_array = customers
     for (let index = 0; index < customers.length; index++) {
         if(third_helper_array[index+1].id==customer.id){
             third_helper_array[customer.id-1].name = customer.name
             third_helper_array[customer.id-1].age = customer.age
             third_helper_array[customer.id-1].address = customer.address
             third_helper_array[customer.id-1].newsLetter = customer.newsLetter
         }
         return third_helper_array;
     }
}
module.exports = modifyCustomer;