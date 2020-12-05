
let letters=[]
let words=["session","god","dog","cat","parrot","panda"]
let secretWord=randomWord(words)
let attempts=2
/*cycle for=command to repeat a part of the code,let=creates переменую,i= переменая i,i<secretword.length=when our cycle cycles through a certain amount of times,i++=our step*/
document.querySelector(".start").onclick=function(){
    for(let i=0;i<secretWord.length;i++){
        
    
        console.log(secretWord[i])
        
    }
}
document.querySelector(".check").onclick=function(){
    let
    letter=document.querySelector(".letter").value
    letters.push(letter)
    let out=""
    for(let i=0;i<secretWord.length;i++){
        //if(secretWord[i]==letter){
        let char=secretWord[i]
        if (letters.indexOf(char)!=-1){
            
            out=out+char
        }else{
            out=out+"*"
        }
    }
    document.querySelector(".word").value=out
    document.querySelector(".letter").value=""
    document.querySelector(".letter").focus()
}
function randomWord(words){
    let random=Math.floor(Math.random()*words.length)
    return words[random]
}
document.querySelector(".start").onclick=function(){
    secretWord=randomWord(words)
    let out=""
    for(let i=0;i<secretWord.length;i++){
        out=out+"*"
    }
    
    document.querySelector(".word").value=out
    attempts=2
    document.querySelector("span").innerHTML=attempts
    document.querySelector(".letter").focus()
    document.querySelector(".letter").value=""
    
    
}