
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
let arr = new Array(12).fill({month:'',income:0,expenses:0}).map((el,i)=>{
    return {...el,
      month:obj[i+1]
    }
  })
export default validateTransactions
// const data = [
//   { month: "January", income: 1300, expenses:2900 },
//   { month: "February", income: 1800, expenses:600 },
//   { month: "March", income: 2300, expenses:900 },
//   { month: "April", income: 6300, expenses:2300 },
//   { month: "May", income: 5800, expenses:3100 },
//   { month: "June", income: 4900, expenses:2700 },
//   { month: "July", income: 5500, expenses:1900 },
//   { month: "August", income: 2300, expenses:900 },
//   { month: "September", income: 3700, expenses:800 },
//   { month: "October", income: 5600,expenses:2400 },
//   { month: "November", income: 4400, expenses:1400 },
//   { month: "December", income: 3900,expenses:1800 },
// ];