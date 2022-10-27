const baseUrl = ''

export const login = async ({username, password}) => {
    try{
        const response = await fetch(`${baseUrl}sign_in`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                              },
                            body: JSON.stringify({
                                email: username,
                                password: password
                            })
                        });
        return response.json();
    }catch( e ){
        throw new Error(e.message())
    }
}