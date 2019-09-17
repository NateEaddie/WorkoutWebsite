
function show(){
    //document.getElementById("showButton").style.display = 'visible';
    document.getElementById("showButton1").style.visibility = 'visible';
}


function lottoResult(){
    document.getElementById("results").style.display = 'inline-block';
    arraySelect();
}

function check(){
    var input = document.getElementById("num-exercises").value;
    var input1 = document.getElementById("num-exercises");
    var arr = document.getElementById("dropdown").value; 
    var arrSize;

    if(arr == "pull"){
        arrSize = ex_pull.length;
    }
    else if(arr == "push"){
        arrSize = ex_push.length;
    }
    else if(arr == "legs"){
        arrSize = ex_legs.length;
    }
    else if(arr == "press"){
        arrSize = ex_press.length;
    }


    if(input > arrSize){
        input1.classList.add("invalid-input");
        input.focus();
    }
    else{
        input1.classList.remove("invalid-input");
        show();
    }
}

/*function test(){
var request = new XMLHttpRequest();
request.open("GET", "/Users/nate/desktop/code/workoutsite/exercises.json", false);
request.send(null)
var my_JSON_object = JSON.parse(request.responseText);
alert (my_JSON_object.result[0]);

}*/




function getUserSelections(){
    var ex = document.getElementById("dropdown").value; 
    return ex; 
    
}

function getUserInput(){

    var numExercises = document.getElementById("num-exercises").value;

    return numExercises;
}






function arraySelect(){
    var arr = getUserSelections();
    
    if(arr == "pull"){
        randomSort(ex_pull);
    }
    else if(arr == "push"){
        randomSort(ex_push)
    }
    else if(arr == "press"){
        randomSort(ex_press)
    }
    else if(arr == "legs"){
        randomSort(ex_legs)
    }

}

//fisher-yates shuffle
function randomSort(item){
    var num = getUserInput();
    for(let i = item.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));

        [item[i], item[j]] = [item[j], item[i]];
    }

    //alert(item[0]);

    //var output = document.getElementById("random-list");
    //var li = document.createElement("li");
    for(let i = 0; i < num; i++){
        var output = document.getElementById("random-list");
        var li = document.createElement("li");
        li.setAttribute('id',item[i]);
        li.appendChild(document.createTextNode(item[i]));
        output.appendChild(li);
    }
}