export const urlR = "https://frosty-wood-6558.getsandbox.com:443/dishes"
// export const urlR = "https://jsonplaceholder.typicode.com/posts"

export let sendRequest = (method, url, body = null) => {

    const headers = {
        'Content-Type': 'application/json'
    }

    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }).then(response => {
        return response.text()
    })
}


