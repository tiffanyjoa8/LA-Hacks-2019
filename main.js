let data;

function hte(){
    console.log("fsdgrhj");
    fetch('')
    .then(function(resp){
        return resp.json();
    }).then(function(resp){
        data = JSON.stringify(resp);

    })
}
function hello1(){
    console.log("fsdgrhj");
    
    var text = "Nope :(";

    alert(text);
}
function hello2(){
    console.log("fsdgrhj");
    
    var text = "Check back later";
    alert(text);
}

function hello3(){
    console.log("fsdgrhj");
    
    var text = "Request could not be processed";
    alert(text);
}

// function hello4(){
//     console.log("fsdgrhj");
    
//     var text = "Yes!";
//     alert(text);
// }



function hhte2(){
    console.log("fsdgrhj");
    document.getElementById('heh').innerHTML+=' <img src="https://i.imgur.com/c4jt321.png">';

}



