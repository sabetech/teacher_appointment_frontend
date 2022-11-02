const baseUrl = 'http://127.0.0.1:3001';

export const login = async ({email, password}) => {
    try{
        const response = await fetch(`${baseUrl}/users/sign_in`, {
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
        const response = await fetch(`${baseUrl}/users`, {
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

export const teachers = async({token}) => {
    try {
        const res = await fetch(`${baseUrl}/api/v1/teachers`, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': token
                        },
                    });
        if (res.status == 401) {
            return false;
        }
        return res.json();
    }catch( e ){
        throw new Error(e.getMessage());
    }
}

export const createTeacher = async({token, teacher}) => {
    try {
        const res = await fetch(`${baseUrl}/api/v1/teachers`, {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': token
                        },
                        body: JSON.stringify(
                            {
                                name: teacher.name,
                                title: teacher.title,
                                photo: teacher.photo
                            }
                        )
                    });
        if (res.status == 401){
            return false;
        }
        return res.json();
    }catch( e ){
        throw new Error(e.getMessage());
    }
}

export const getTeacher = async({token, teacher_id}) => {
    try {
        const res = await fetch(`${baseUrl}/api/v1/teachers/${teacher_id}`, {
                        method: "GET",
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': token
                        }
                    });
        if (res.status == 401){
            return false;
        }
        return res.json();
    }catch( e ){
        throw new Error(e.getMessage());
    }
}

export const getReservations = async({token}) => {
    try {
        const res = await fetch(`${baseUrl}/api/v1/reservations`, {
                        method: "GET",
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': token
                        }
                    });
        if (res.status === 401) {
            return false;
        }
        return res.json();
    }catch( e ){
        throw new Error(e.getMessage());
    }
}

export const makeReservation = async({token, teacher, city, reservation_date}) => {
    
    try {
        const res = await fetch(`${baseUrl}/api/v1/reservations`, {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': token
                        },
                        body: JSON.stringify(
                            {
                                reservation_date: reservation_date,
                                city: city,
                                teacher_id: teacher.id
                            }
                        )
                    });
        if (res.status == 401){
            return false;
        }
        return res.json();
    }catch( e ){
        throw new Error(e.getMessage());
    }
}

