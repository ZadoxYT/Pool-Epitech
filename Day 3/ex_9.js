const div = []
function splitOperation(a,b,op){
    let envo = a + op + b
    envo.toString()
    div.push(envo)
}
splitOperation(15,43,"+")
console.log(div[0])