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
function clickMe(event){
    let x = event.target.id;
    let btn=document.getElementById(x);
    if(count%2 != 0){
        btn.innerText="X";
        count++;
        // Array value is 1 for X 
        if(x=="cell-1"){arr[0][0]=1;}
        else if(x=="cell-2"){arr[0][1]=1;}
        else if(x=="cell-3"){arr[0][2]=1;}
        else if(x=="cell-4"){arr[1][0]=1;}
        else if(x=="cell-5"){arr[1][1]=1;}
        else if(x=="cell-6"){arr[1][2]=1;}
        else if(x=="cell-7"){arr[2][0]=1;}
        else if(x=="cell-8"){arr[2][1]=1;}
        else if(x=="cell-9"){arr[2][2]=1;}
        result();
    }

    else{
        btn.innerText="O";
        count++
        // Array value is 0 for O 
        if(x=="cell-1"){arr[0][0]=0;}
        else if(x=="cell-2"){arr[0][1]=0;}
        else if(x=="cell-3"){arr[0][2]=0;}
        else if(x=="cell-4"){arr[1][0]=0;}
        else if(x=="cell-5"){arr[1][1]=0;}
        else if(x=="cell-6"){arr[1][2]=0;}
        else if(x=="cell-7"){arr[2][0]=0;}
        else if(x=="cell-8"){arr[2][1]=0;}
        else if(x=="cell-9"){arr[2][2]=0;}
        result();
    }
    // console.log(arr);
}
function result(){
    let x = document.getElementById("p1");
    for(let i=0; i<3; i++)
    {
        if(arr[i][0]==1 && arr[i][1]==1 && arr[i][2]==1)
        {
            x.innerHTML+="<span> Winner &#127942 </span>";
        }
        
        else if(arr[0][i]==1 && arr[1][i]==1 && arr[2][i]==1)
        {
            x.innerHTML+="<span> Winner &#127942 </span>";
        }

        else if(arr[0][0] == 1 && arr[1][1] == 1 && arr[2][2] == 1)
        {
            x.innerHTML+="<span> Winner &#127942 </span>";
        }

        else if(arr[0][2] == 1 && arr[1][1] == 1 && arr[2][0] == 1)
        {
            x.innerHTML+="<span> Winner &#127942 </span>";
        }  
    }
    
    let y = document.getElementById("p2");
    for(let i=0; i<3; i++)
    {
        if(arr[i][0]==0 && arr[i][1]==0 && arr[i][2]==0)
        {
            y.innerHTML+="<span> Winner &#127942 </span>";
        }

        else if(arr[0][i]==0 && arr[1][i]==0 && arr[2][i]==0)
        {
            y.innerHTML+="<span> Winner &#127942 </span>";
        }

        else if(arr[0][0] == 0 && arr[1][1] == 0 && arr[2][2] == 0)
        {
            y.innerHTML+="<span> Winner &#127942 </span>";
        }

        else if(arr[0][2] == 0 && arr[1][1] == 0 && arr[2][0] == 0)
        {
            y.innerHTML+="<span> Winner &#127942 </span>";
        }  
    }
    
}
    