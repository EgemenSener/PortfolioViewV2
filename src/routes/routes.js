export const getToken = async () => {

    const data = { username: 'egemensener', password: "Egemen1234." };

    const request = await fetch('http://localhost:5000/getToken', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).catch((error) => {
        console.error('Error:', error);
    });

    const result = await request.json();

    console.log('Success:', result);
    sessionStorage.setItem("accessToken", result.accessToken)

}

export const getPersonInfo = async () => {

    const request = await fetch('http://localhost:5000/person/63d5698470f062ca9f78557a')
        .catch((error) => {
            console.error('Error:', error);
        });

    const result = await request.json();

    //console.log('Success:', result);
    return result;

}

export const addNewPerson = () => {
    const burak = { "name": "burak", "surname": "sener" }

    fetch('http://localhost:5000/person', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(burak),
    }).then((data) => {
        console.log('Success:', data);
    })
        .catch((error) => {
            console.error('Error:', error);
        });
}

//getPersonInfo()
//addNewPerson()
//getToken()

