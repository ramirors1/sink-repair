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

export const sendRequest = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }

    const mainContainer = document.querySelector("#container");
    
    return fetch(`${API}/requests`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            // do something after the POST is finished. Stay tuned for what to put here!
        })
}
export const deleteRequest = (id) => {
    return fetch(`${API}/requests/${id}`, { method: "DELETE" })
        .then(
            () => {
                const mainContainer = document.querySelector("#container");
  
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
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