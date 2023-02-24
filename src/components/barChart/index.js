
let daysObj = {
    '0': 'Sunday',
    '1': 'Monday',
    '2': 'Tuesday',
    '3': 'Wednesday',
    '4': 'Thursday',
    '5': 'Friday',
    '6': 'Saturday',
  }
  
  let end = new Date().getDate() + 1
  let start = new Date().getDate() - 6
  const generateBarChartData=(list, Arr, label)=>{
    for (let i = 0; i < Arr.length; i++) {
        let current_day = Arr[i].name
        let dayOfWeekArr = list.filter((el) => {
          let date = new Date(el.t_date);
          if (daysObj[date.getDay()] === current_day) {
             return el
          }
        })
    
        let sum = dayOfWeekArr.reduce((acc, curr) => acc + curr.amount, 0)
        Arr[i][label] += sum
    }
    
    console.log(Arr, end, start)
    
  }
 export default generateBarChartData;