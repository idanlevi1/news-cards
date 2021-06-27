


export const Rest = (url, params) => {
    let apiUrl = url
    if (params) {
        apiUrl = withQuery(url, params)
    }
    return fetch(apiUrl)
        .then(res => res.json())
        .then((data) => {
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