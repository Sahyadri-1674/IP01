const marks = [10,20,30,40];

const marksIter = marks[Symbol.iterator]();


console.log(marksIter.next());
console.log(marksIter.next());
console.log(marksIter.next());
console.log(marksIter.next());
console.log(marksIter.next());


function myiterator(values){
    let index = 0;
    return {
        next:function(){
            if(index<values.length){
                return {
                    value:values[index++],
                    done:false
                }
            } else {
                return {
                    value:undefined,
                    done:true
                }
            }
        }
    }
}

let fname = "Prasad";

const fnameIter = myiterator(fname);

console.log(fnameIter.next());
console.log(fnameIter.next());
console.log(fnameIter.next());
console.log(fnameIter.next());
console.log(fnameIter.next());
console.log(fnameIter.next());
console.log(fnameIter.next());