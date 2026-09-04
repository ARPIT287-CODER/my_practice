function grade(marks){
let grade=Math.floor(marks/10);
    switch(grade){
        case 10:
        case 9:
            console.log("grade A");
        break;
        case 8:
        case 7:
        case 6:
     console.log("grade B");
        break;
        case 5:
        console.log("grade C");
        break;
        default :
        console.log("grade F");
        

    }
}
grade(30);
grade(80);
grade(90);