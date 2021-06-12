// callback
/**
 * A function passed in the parameter of another function is called callback; 
 */

let fruits = ['Apple', 'peral', 'mango'];

const getFruits = () => {
    setTimeout(()=> {
        fruits.forEach(data => {
            console.log(data)
        })
    },1000)
};

const postFruit = (fruit, callback) => {
    setTimeout(()=> {
        fruits.push(fruit)
        callback()
    },1000);
};
postFruit("Kiwi", getFruits)


const students = [
    {name: "karim"},
    {id: 'gis1038'},
    {semister: '4th'},
    {name: "Zailn"},
    {id: 'gis1028'},
    {semister: '4th'},
    {name: "Hussnain"},
    {id: 'gis1878'},
    {semister: '4th'},
    {name: "Ali"},
    {id: 'gis1938'},
    {semister: '4th'},
]
const getStudents = (student, returnStudent)=>{
setTimeout(()=>{
    console.log(student)
  students.push(student)
},2000)
}
// const postStudent = (student, post) => {
//     setTimeout(()=> {
//         student.push(student)
//         post();
//     },1000)
// };
// posttudent(    
// {name: "Muiz"},
// {id: 'gis1048'},
// {semister: '4th'}, getStudents)

getStudents({name: 'karim'},
    {name: "jabbar"}, students)