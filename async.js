const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

function getpost (){
    setTimeout(()=> {
        let output = '';
        posts.forEach((post, index)=> {
            output += `<li>${post.title}, ${index.body}</li>`
        });
        document.body.innerHTML = output;
    },1000)
}
getpost()


// creating post

function createPost(post, callback) {
    setTimeout(()=> {
        posts.push(post);
        callback();
    },2000)
}
getpost();

createPost({title: 'Dot Austere', body: "An Organizaiton for professional development"}, getpost);

//callbacks
// function createPost(post, callback) {
//     setTimeout(()=> {
//         posts.push(post);
//         callback();
//     },2000);
// }
// createPost({title: 'Dot Austere', body: 'A organization for developement of skills and good citizen which contirbute for global progress.',getpost })