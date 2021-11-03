saturdayFun();
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
};

saturdayFun('ice-skate');

function mondayWork(mondayTask = 'go to the office') {
    return `This Monday, I will ${mondayTask}.`;
}

mondayWork('work from home');

function wrapAdjective(String = "*") {
    return function(whatIs = "special") {
        return `You are ${whatIs}`;
    }
}


// const encouragingPromptFunction = wrapAdjective("!!!");