
let obj={'1':'January',
            '2':'Febuary',
            '3':'March',
            '4':'April',
            '5':'May',
            '6':'June',
            '7':'July',
            '8':'August',
            '9':'September',
            '10':'October',
            '11':'November',
            '12':'December',
        }
       
const validateTransactions=(label,arr, list)=>{
   
    for(let i=0; i<arr.length; i++){
        const filteredExp=list.filter((el)=>{
          if(el.Month==i+1){
            return el.amount
            
                         }
        })
        if(filteredExp.length>0){
          const sum=filteredExp.reduce((acc,curr)=>acc+curr.amount,0)
    
        arr[i][label]+=sum
        }
        console.log(arr[i])
      }
      console.log(arr,'arr')
      return arr
}

export default validateTransactions