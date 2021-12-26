console.log('Client side javascript file is loaded!')

// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
//     response.json().then((data)=>{
//         console.log(data)
//     })
// })

// fetch('http://localhost:3000/weather?address=india').then((response)=>{
//     response.json().then((data)=>{
//        if(data.error)
//        {
//            console.groupCollapsed(data.error)
//        }else{
//            console.log(data.address)
//            console.log(data.forecast)
//        }
//     })
// })
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const mesageOne = document.querySelector('#message-1')
const mesageTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    
    const location = search.value

    mesageOne.textContent= 'loading...'
    mesageTwo.textContent=''
    
        fetch('http://localhost:3000/weather?address='+location).then((response)=>{
            response.json().then((data)=>{
            if(data.error)
            {
                mesageOne.textContent=data.error
            }else{
                console.log(data) 
                mesageOne.textContent=data.address
                mesageTwo.textContent=data.forecast
            }
            })
        })
    

    //console.log('teting') 
})