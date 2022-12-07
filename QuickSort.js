console.log("welcome to Quick-Sort demo application in JS!");
console.error('Author:\t',"H. Ibrahimy\n")

var list = [];
export function AssignArray(arr){

    list = arr;
    // var list =  [1,6,9,2,3,4,8,5,7];
}

export function BeforeSort(){
    console.log('Before QuickSort:\t',list);
}


// Quick Sort Algorithm
function partition(l,h){

    let pivote = list[l];
    let i=l,j=h;
    while(i<j){
        
        do{
            i++;
            // console.log('I increased\n')
        }while(pivote >= list[i]);
 
        do{
            j--;
            // console.log('J decreased\n')        
        }while(pivote < list[j]);

        if(i<j){
            swap(i,j);
        }
    }
    swap(l,j);
    return j;
}
function swap(a,b){
    let temp = list[a];
    list[a]=list[b];
    list[b]=temp;
    // console.log('Swapped\n')
}
function QuickSort(l,h){
    if(l<h){
        let j=partition(l,h);
        QuickSort(l,j);
        QuickSort(j+1,h);
    }
}

export function AfterSort(){
    QuickSort(0,list.length);
    console.log('After QuickSort:\t',list);
}
