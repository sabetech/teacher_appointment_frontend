const baseUrl = 'http://127.0.0.1:3000/';

export const login = async ({email, password}) => {
    try{
        const response = await fetch(`${baseUrl}users/sign_in`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                              },
                            body: JSON.stringify({user:{
                                email: email,
                                password: password
                            }})
                        });
        const data = await response.json();
        return {
                data,
                header: response.headers.get('Authorization')
            };
    }catch( e ){
        throw new Error(e.message())
    }
}

export const signup = async ({name, email, password}) => {
    try{
        const response = await fetch(`${baseUrl}users`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                              },
                            body: JSON.stringify({user:{
                                name: name,
                                email: email,
                                password: password
                            }})
                        });
        const data = await response.json();
        return {
                data,
                header: response.headers.get('Authorization')
            };
    }catch( e ){
        throw new Error(e.message())
    }
}

export const logout = async ({token}) => {
    try{
        const response = await fetch(`${baseUrl}/users/sign_out`, {
                            method: 'DELETE',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': token
                              },
                        });
        const data = await response.json();
        return data;
    }catch( e ){
        throw new Error(e.getMessage());
    }
}


