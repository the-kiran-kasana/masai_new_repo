
// Title: L1 - Student Score Manager: Handling Dynamic Adjustments
function studentScore(score)
{

    for(let i=0;i<score.length;i++){
      if(score[i]<40){
        score[i] = score[i] + 20;
      }
    }
    
    let count = 0
    for(let i=0;i<score.length;i++){
      if(score[i]>=50){
        count++
      }
    }
    return count;
}

let score = [10,20,30,40,50,60,70,30,90,30]
let passedStd = studentScore(score)
console.log(passedStd)
