function getFullResponseFromAPI(success) {
    new success  ((resolve, reject) => {
        if (true) {
            resolve {
                status: 200,
                body: 'Success',
            }
        }
        else {
            reject("The fake API is not working currently")
        }
    }
}