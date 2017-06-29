function test() {
    //let formData = new FormData();
       // formData.append("username", "rain");
       // formData.append("pwd", "123");
    fetch('./Login/UserLogin', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'json'
            //'Content-Type': 'application/x-www-form-urlencoded',
        },
       body: JSON.stringify({
            'userName': "sun",
            'userPwd': "123456",
        }),
       // body: formData
    })
}