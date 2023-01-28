/* Global Variables */
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?zip='
const apiKey = '&appid=1c79b104ba071f831b90af60e811abb4&units=metric';
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth() + 1) + '.' + d.getDate() + '.' + d.getFullYear();
// console.log(d)


//the main async fuonction 
const action = async () => {

    //get user task
    const zipCode = document.getElementById('zip').value
    const feeling = document.getElementById('feelings').value

    //get data from weathermap
    const res = await fetch(baseUrl + zipCode + apiKey)
    const data = await res.json()
    const temp = data.main.temp;

    //save the data in the backend
    await fetch('/saveData', {
        method: 'Post',
        headers: { 'content-Type': 'application/json' },
        body: JSON.stringify({
            temp, feeling, newDate
        })
    })

    //get data from the back end

    const res2 = await fetch('/getData')
    const opData = await res2.json()



    //fill data in UI
    document.getElementById('date').innerHTML = opData.newDate;
    document.getElementById('temp').innerHTML = opData.temp;
    document.getElementById('content').innerHTML = opData.feeling;

}


//The generator button
document.getElementById('generate').addEventListener('click', action)