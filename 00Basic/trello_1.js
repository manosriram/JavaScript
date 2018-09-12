let percentage = function(currentMarks,totalMarks) {
    let per;
    if (currentMarks<=100) {
    per = (currentMarks/totalMarks)*100;
    return per;
}
    else {
        console.log("Please Input currentMarks Under 100");
        
}
}

let result;
result = percentage(120,100);



if (result >= 90) {
    console.log("Grade A.");
}

else if (result >=80) {
    console.log("Grade B.");
}

else if (result>=70) {
    console.log("Grade C.");
}

else if (result>=60) {
    console.log("Grade D.");
}

else if (result>=50){ 
    console.log("Grade E.");
}

else if (result<50) {
    console.log("Fail.");
}

