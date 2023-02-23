// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
    if (blocks > 42)
    return blocks - 42

    else (blocks < 42)
    return 42 - blocks
}
function distanceFromHqInFeet(blocks){
distanceFromHqInBlocks(blocks)
const feet = distanceFromHqInBlocks(blocks) * 264
return feet
}

function distanceTravelledInFeet(start, destination){
    if (start < destination)
    return (destination - start) * 264

else (start > destination)
return (start - destination) * 264
}

function calculatesFarePrice(start, destination){
const distance = distanceTravelledInFeet(start, destination)
if (distance < 400)
return 0
else if (distance > 400 && distance < 2000)
return (distance - 400) * .02

else if (distance > 2000 && distance < 2500)
return 25

else (distance > 2500)
return 'cannot travel that far'
    
    


}
    
    