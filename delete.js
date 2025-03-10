//1
const getformData = (form)=>{
    const formdata = new FormData(form)
    const data = {}
    for(const [key,value] of formdata.entries()){
       data[key] = value
    }
    return data
  }

  const data = getformData(e.target)   
  setExpenseData((prev)=>[...prev,{...data,id:crypto.randomUUID()}])

//2
const [title,setTitle]  = useState('')
const [category,setCategory] = useState('')
const [amount,setAmount] = useState('')

e.target.reset()

//3

 const refValue = useRef(89)
  console.log('Our ref',refValue)
<button onClick={()=>{
  refValue.current +=1
}}>Click me</button>
