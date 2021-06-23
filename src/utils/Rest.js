


export const Rest = (url, params) => {
    let apiUrl = url
    console.log("Rest -> url", url)
    if (params) {
        apiUrl = withQuery(url, params)
    }
    console.log("Rest -> apiUrl", apiUrl)
    return fetch(apiUrl)
        .then(res => res.json())
        .then((data) => {
            console.log("Rest -> data", data)
            return data
        })
        .catch(console.log)
}

const withQuery = (url, params) => {
    let query = Object.keys(params)
        .filter(k => !!params[k])
        .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
        .join('&')
    url += (url.indexOf('?') === -1 ? '?' : '&') + query
    return url
}