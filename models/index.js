// require the rest of the models and ship them off here

function check (arr,element){
    var bool = false
    for(var i = 0; i<arr.length;i++){
        if (element === arr[i]){
            bool = true
        }
      return bool;
    }
}


function double (arr){
    var newArr = []
    for(var i = 0; i<arr.length;i++){
        
        newArr.push(arr[i]*2)

        }
      return newArr;
    }

    function unshift (arr){
        var item = 'hi'
        for(var i = 1; i<arr.length;i++){
            
            arr[i+1] = arr[i]
            arr[0] = item
            }
          return arr;
        }