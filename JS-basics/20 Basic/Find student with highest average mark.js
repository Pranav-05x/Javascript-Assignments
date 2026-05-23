let marks={ A: [80, 90], B: [70, 75, 85] }

let mostAvg=0;

let ans;

Object.keys(marks).forEach(function(key){
    let avg=0;
    let sum=0;
    for(let i=0;i<marks[key].length;i++){
        sum+=marks[key][i];
    }
    avg=sum/marks[key].length;
    if(avg>mostAvg){
        mostAvg=avg;
        ans=key;
    }
})

console.log(ans);