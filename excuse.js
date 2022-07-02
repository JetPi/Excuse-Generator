let who = ['the dog','my granma','his turtle','my bird', 'a car'];
let what = ['eat','pissed','crushed','broked', 'tore'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

const sentenceSelector = () =>{
    let num = Math.floor(Math.random()*(5-1)+1)
    return num;
}

const sentenceGenerator = (who,what,when) =>{

    let sentence = `${who[sentenceSelector()]} ${what[sentenceSelector()]} my homework ${when[sentenceSelector()]}`
    let result = sentence.charAt(0).toUpperCase() +  sentence.slice(1)
    
    return result;
}

window.onload = () =>{
    let excuse = document.querySelector("#excuse")
    
    excuse.innerHTML=sentenceGenerator(who,what,when)
}