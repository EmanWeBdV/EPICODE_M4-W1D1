//1. Crea una funzione che controlli due numeri interi. Ritorna 'true' se uno dei due è 50 o se la somma dei due è 50

function checkNumber(num1, num2){
    if(num1 === 50 || num2 === 50 || (num1 + num2 === 50)){
        return true
    }
}

console.log(checkNumber(0, 50))

//2. Crea una funzione che rimuova il carattere ad una specifica posizione da un stringa. Passa la stringa e la posizione come parametri e ritorna la strina modificata

function modifyWord(str){
    let arrWord = str.split("")
    let removeChar = arrWord.splice(1)
    let newWordMod = removeChar.toString().replaceAll(",", "")
    return newWordMod
}

console.log(modifyWord("pane"))

//3. Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100. Ritorna 'true' se rispecchiano queste condizioni, altrimenti ritorna 'false'

function checkRangeNumber (num1, num2){
    if((num1 >= 40 && num1 <= 60) && (num2 >= 40 && num2 <= 60)){
        return true
    } else {
        return false
    }
}

console.log(checkRangeNumber(39, 60))

//4. Crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inzia con "Los" o "New", altrimenti ritorni 'false'

function nameCity(str){
    if (str.startsWith("Los") || str.startsWith("New")){
        return str
    } else {
        return false
    }
}

console.log(nameCity("New York"))

//5. Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array. L'array deve essere passato come parametro.

function sumArray(arr){
    let sumAr = 0
    console.log(sumAr)
    for(let i = 0; i < arr.length; i++){
        let singleNum = arr[i]
        sumAr += singleNum
    } return sumAr
    
}

let numArray = [1 ,4, 5]
console.log(sumArray(numArray))

//6. Crea una funzione che controlli che un array NON contenga i numeri 1 o 3. Se NON li contiene, ritorna 'true', altrimenti ritorna 'false'

function checkNumArr(arr){
    for(let i = 0; i < arr.length; i++){
        if (arr[i] === 1 || arr[i] === 3){
            return false
        }
    } 
    return true
}

let numArrayOfCheck = [1, 6, 5]
console.log(checkNumArr(numArrayOfCheck))

//7. Crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro.
/*Angolo acuto: meno di 90° -> ritorna "acuto" */
/*Angolo ottuso: tra i 90° e i 180° -> ritorna "ottuso" */
/*Angolo retto: 90° -> ritorna "retto" */
/*Angolo piatto: 180° -> ritorna "piatto" */



//8. Crea una funzione che crei un acronimo a partire da una frase. Es. "Fabbrica Italiana Automobili Torino" deve ritornare "FIAT"

//9.Extra - 1. Partendo da una stringa (passata come parametro), ritorna il carattere più usato nella stringa stessa.

//10.Extra - 2. Controlla che due stringhe passate come parametri siano gli anagrammi l’una dell’altra. Ignora punteggiatura e spazi e ricordate di rendere la stringa tutta in minuscolo. Se le due parole sono anagrammi, ritorna `true`, altrimenti ritorna `false`.

//11.Extra - 3. Partendo da una lista di possibili anagrammi e da una parola (entrambi passati come parametri), ritorna un nuovo array contenente tutti gli anagrammi corretti della parola data.

//12.Extra - 4. Partendo da una stringa passata come parametro, ritorna `true` se la stringa è palindroma o `false` se non lo è.

//13.Extra - 5. Partendo da un numero intero (dai parametri) ritorna un numero che contenga le stesse cifre, ma in ordine contrario. Es. 189 ⇒ 981

//14.Extra - 6. Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una “scala” creata con il carattere “#” e avente X scalini.
/*
Es. 

X = 2 

'# '

'##'

X = 3

'# ' 

'## '

'###'
*/

//15.Extra - 7. Crea una funzione che, data una stringa come parametro, ritorni la stessa stringa, ma al contrario. Es. “Ciao” ****⇒ “oaiC”

//16.Extra - 8. Crea una funzione che accetti un array e un numero Y come parametro. Dividi l’array in sotto-array aventi lunghezza Y.
/*
Es. array: [1, 2, 3, 4], y: 2 ⇒ [[ 1, 2], [3, 4]] 

array: [1, 2, 3, 4, 5], y: 4 ⇒ [[ 1, 2, 3, 4], [5]]
*/

//17.Extra - 9. Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una “piramide” create con il carattere “#” e avente X strati.

/*
Es. 

X = 3

' # ' 

' ### ' 

'#####'
*/

//18.Extra - 10. Scrivi una funzione che accetti un intero N e ritorni una matrice a spirale NxN:
/*
Es. N = 2

[[1, 2],[4, 3]]

N = 3

[[1, 2, 3],[8, 9, 4],[7, 6, 5]]

N = 4

[[1, 2, 3, 4],[12, 13, 14, 5],[11, 16, 15, 6],[10, 9, 8, 7]]
*/
