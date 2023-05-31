function aa(params) {
    console.log('aa')
    return function dd(){
        console.log('ddd');
        
    }
}
let b = aa()
b()
