// code your solution here
function saturdayFun(myActivity="roller-skate"){

    return `This Saturday, I want to ${myActivity}!`;

}
function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`;
}
function wrapAdjective(myAdjective="*"){
    return function ( action="a hardworker"){
        return `You are ${myAdjective}${action}${myAdjective}!`;

    
    }
}



