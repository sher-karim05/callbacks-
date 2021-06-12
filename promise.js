const names = ['karim', 'kamran', 'rahim','rasheed', 'faisal', 'manawar'];

const getNames = () => {
    setTimeout(()=> {
        names.forEach(data =>{
        console.log(data)
    })

    },1000)
}

let name = "zAILAN";
const  postNames = () => {
    return new Promise((res,rej) => {
        setTimeout(()=>{
            names.push(name);
            let err = false;
            if(!err){
                res();
            }else{
                rej('Something went wrong');
            }
        },2000);
    })
}

postNames('saleem')
.then(getNames)
.catch(err => {
    console.log(err)
});
getNames()
