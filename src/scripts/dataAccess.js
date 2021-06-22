const applicationState = {
    requests: []
}

export const getRequests = () => {
    return [...applicationState.requests]
}


const API = "http://localhost:8088"

export const fetchRequests = () => {
    return fetch(`${API}/requests`)
        .then((response) => response.json())
        .then(
            (serviceRequests) => {
                
                applicationState.requests = serviceRequests
            }
        )
}
// export const getRequests = () => {
    
//     const newOrder = {...dataAccess.requests}

//     const lastIndex = dataAccess.requests.length - 1
//     newOrder.id = dataAccess.requests[lastIndex].id + 1

//     newOrder.timestamp = Date.now()

//     dataAccess.requests.push(newOrder)

//     dataAccess.requests = {}

//     document.dispatchEvent(new CustomEvent("stateChanged"))
// }