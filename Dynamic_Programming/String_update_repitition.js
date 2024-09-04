let str = "aabccddddeeeeeegggaa"
let resultStr = ""
let add = ""
let count = 1
for(let i=1; i<=str.length; i++){
   if(str[i]===str[i-1]) {
       count++
   }
   else{
       if(count!==1){
           add = str[i-1]+ count.toString();
       }
       else{
           add = str[i-1]
       }
       
       resultStr += add;
       count=1
       
   }
 
}
console.log(resultStr)