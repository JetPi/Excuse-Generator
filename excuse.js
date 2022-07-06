let who = ['the dog','my granma','his turtle','my bird', 'a car'];
let what = ['ate','pissed','crushed','broked', 'tore'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

const sentenceSelector = (subject) =>{
    let num = Math.floor(Math.random()*(subject.length-1))
    return num;
}

const sentenceGenerator = (who,what,when) =>{
    let sentence = `${who[sentenceSelector(who)]} ${what[sentenceSelector(what)]} my homework ${when[sentenceSelector(when)]}`
    let result = sentence.charAt(0).toUpperCase() +  sentence.slice(1)
    
    return result;
}

window.onload = () =>{
    let excuse = document.querySelector("#excuse")
    
    excuse.innerHTML=sentenceGenerator(who,what,when)
}