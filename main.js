let count = 1; // Variable to counter the input of player 1 and player 2 (count is odd for player 1 and even for player 2)

// Array to track the input of users
let arr = [
        [2,2,2],
        [2,2,2],
        [2,2,2]
];

// Function to reset
function reload(){
    location.reload();
}

// Function to show input of users in the cells
function clickMe(clicked_id){
    let btn=document.getElementById(clicked_id);
    if(count%2 != 0){
        btn.innerText="X";
        count++;
        // Array value is 1 for X 
        if(clicked_id=="cell-1"){arr[0][0]=1;}
        else if(clicked_id=="cell-2"){arr[0][1]=1;}
        else if(clicked_id=="cell-3"){arr[0][2]=1;}
        else if(clicked_id=="cell-4"){arr[1][0]=1;}
        else if(clicked_id=="cell-5"){arr[1][1]=1;}
        else if(clicked_id=="cell-6"){arr[1][2]=1;}
        else if(clicked_id=="cell-7"){arr[2][0]=1;}
        else if(clicked_id=="cell-8"){arr[2][1]=1;}
        else if(clicked_id=="cell-9"){arr[2][2]=1;}
        result();
    }

    else{
        btn.innerText="O";
        count++
        // Array value is 0 for O 
        if(clicked_id=="cell-1"){arr[0][0]=0;}
        else if(clicked_id=="cell-2"){arr[0][1]=0;}
        else if(clicked_id=="cell-3"){arr[0][2]=0;}
        else if(clicked_id=="cell-4"){arr[1][0]=0;}
        else if(clicked_id=="cell-5"){arr[1][1]=0;}
        else if(clicked_id=="cell-6"){arr[1][2]=0;}
        else if(clicked_id=="cell-7"){arr[2][0]=0;}
        else if(clicked_id=="cell-8"){arr[2][1]=0;}
        else if(clicked_id=="cell-9"){arr[2][2]=0;}
        result();
    }
    console.log(arr);
}
function result(){
    if(arr[0][0] == 1 && arr[0][1] == 1 && arr[0][2] == 1){document.getElementById("p1").innerHTML+="<span> Winner &#127942 </span>";}
    else if(arr[1][0] == 1 && arr[1][1] == 1 && arr[1][2] == 1){document.getElementById("p1").innerHTML+="<span> Winner &#127942 </span>";}
    else if(arr[2][0] == 1 && arr[2][1] == 1 && arr[2][2] == 1){document.getElementById("p1").innerHTML+="<span> Winner &#127942 </span>";}
    else if(arr[0][0] == 1 && arr[1][0] == 1 && arr[2][0] == 1){document.getElementById("p1").innerHTML+="<span> Winner &#127942 </span>";}
    else if(arr[0][1] == 1 && arr[1][1] == 1 && arr[2][1] == 1){document.getElementById("p1").innerHTML+="<span> Winner &#127942 </span>";}
    else if(arr[0][2] == 1 && arr[1][2] == 1 && arr[2][2] == 1){document.getElementById("p1").innerHTML+="<span> Winner &#127942 </span>";}
    else if(arr[0][0] == 1 && arr[1][1] == 1 && arr[2][2] == 1){document.getElementById("p1").innerHTML+="<span> Winner &#127942 </span>";}
    else if(arr[0][2] == 1 && arr[1][1] == 1 && arr[2][0] == 1){document.getElementById("p1").innerHTML+="<span> Winner &#127942 </span>";}  

    if(arr[0][0] == 0 && arr[0][1] == 0 && arr[0][2] == 0){document.getElementById("p2").innerHTML+="<span> Winner &#127942 </span>";}
    else if(arr[1][0] == 0 && arr[1][1] == 0 && arr[1][2] == 0){document.getElementById("p2").innerHTML+="<span> Winner &#127942 </span>";}
    else if(arr[2][0] == 0 && arr[2][1] == 0 && arr[2][2] == 0){document.getElementById("p2").innerHTML+="<span> Winner &#127942 </span>";}
    else if(arr[0][0] == 0 && arr[1][0] == 0 && arr[2][0] == 0){document.getElementById("p2").innerHTML+="<span> Winner &#127942 </span>";}
    else if(arr[0][1] == 0 && arr[1][1] == 0 && arr[2][1] == 0){document.getElementById("p2").innerHTML+="<span> Winner &#127942 </span>";}
    else if(arr[0][2] == 0 && arr[1][2] == 0 && arr[2][2] == 0){document.getElementById("p2").innerHTML+="<span> Winner &#127942 </span>";}
    else if(arr[0][0] == 0 && arr[1][1] == 0 && arr[2][2] == 0){document.getElementById("p2").innerHTML+="<span> Winner &#127942 </span>";}
    else if(arr[0][2] == 0 && arr[1][1] == 0 && arr[2][0] == 0){document.getElementById("p2").innerHTML+="<span> Winner &#127942 </span>";}    
}
    