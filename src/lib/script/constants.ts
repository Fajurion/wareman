export const BASE_PATH = "http://localhost:3000"

export async function get(path: string): Promise<any> {
    
    const response = await fetch(`${BASE_PATH}${path}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + (localStorage.getItem('token') ?? '')
        }
    })
    const data = await response.json()

    return data
}

export async function post(path: string, body: string): Promise<any> {
    
    const response = await fetch(`${BASE_PATH}${path}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + (localStorage.getItem('token') ?? '')
        },
        body: body
    })
    const data = await response.json()

    return data
}