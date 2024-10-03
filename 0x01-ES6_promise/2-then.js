export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      // When the promise resolves, return the success object
      return {
        status: 200,
        body: 'success',
      };
    })
    .catch(() => {
      // When the promise rejects, return an empty Error object
      return new Error();
    })
    .finally(() => {
      // This is executed for both resolved and rejected promises
      console.log('Got a response from the API');
    });
}
