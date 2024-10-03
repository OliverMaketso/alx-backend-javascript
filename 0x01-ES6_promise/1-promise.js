export default function getFullResponseFromAPI(success) {
    return new Promise((resolve, reject) => {
        if (success) {
            //Resolve the promise with the desired object
            resolve({
                status: 200,
                body: 'success',
            });
        } else {
            //Reject the promise with an error message
            reject(new Error('The fake API is not working currently'));
        }
    });
}