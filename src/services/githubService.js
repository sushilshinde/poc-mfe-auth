export async function authenticate(username, password) {
    try {
        const response = await fetch(`${process.env.API_URL}/login`,  {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
                username,
                password,
            }),
        })
        if(response.status !== 200) {
            throw Error('Failed Fetch')
        }else {
            const json = response.json()
            return Promise.resolve(json)
        }
    } catch (error) {
        console.log(error)
        return Promise.reject(error)
    }
}