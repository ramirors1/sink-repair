import { getRequests, deleteRequest } from "./dataAccess.js"
 
export const Requests = () => {
    const requests = getRequests() // grab the local state of the requests data
    
    const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})
    let html = `
        <ul class = "requestClass">
            ${
                requests.map((request) => `
                <li class="requestClass_bullet">
                    <input type="radio" value=request--${request.id} name="request"> 
                    ${request.description}
                    ${request.address}
                    ${request.budget}
                    ${request.neededBy}
                    <button class="request__delete"
                            id="request--${request.id}">
                        Delete
                    </button>
                </li>`
                ).join("")}
        </ul>`
            
return html
            }
                
            
// export const requests = () => {
//     const requests = getRequests() // grab the local state of the requests data
//     let html = "<ul>"
//     const listItems = requests.map(request)
                           
//     html += listItems.join("")     
//     html += "</ul>"
    

//     return html
//}