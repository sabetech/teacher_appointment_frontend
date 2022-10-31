const baseUrl = "http://127.0.0.1:3000/";

export const login = async ({ email, password }) => {
  try {
    const response = await fetch(`${baseUrl}users/sign_in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          email: email,
          password: password,
        },
      }),
    });
    const data = await response.json();
    return {
      data,
      header: response.headers.get("Authorization"),
    };
  } catch (e) {
    throw new Error(e.message());
  }
};

export const signup = async ({ name, email, password }) => {
  try {
    const response = await fetch(`${baseUrl}users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          name: name,
          email: email,
          password: password,
        },
      }),
    });
    const data = await response.json();
    return {
      data,
      header: response.headers.get("Authorization"),
    };
  } catch (e) {
    throw new Error(e.message());
  }
};

export const logout = async ({ token }) => {
  try {
    const response = await fetch(`${baseUrl}/users/sign_out`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error(e.getMessage());
  }
};

export const getReservations = async ({ token }) => {
  try {
    const response = await fetch(`${baseUrl}/api/v1/reservations`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error(e.getMessage());
  }
};

export const createReservation = async ({ token, reservation }) => {
  try {
    const response = await fetch(`${baseUrl}/api/v1/reservations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify({ reservation: reservation }),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error(e.getMessage());
  }
};

export const updateReservation = async ({ token, reservation }) => {
  try {
    const response = await fetch(
      `${baseUrl}/api/v1/reservations/${reservation.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify({ reservation: reservation }),
      }
    );
    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error(e.getMessage());
  }
};

export const deleteReservation = async ({ token, reservation }) => {
  try {
    const response = await fetch(
      `${baseUrl}/api/v1/reservations/${reservation.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error(e.getMessage());
  }
};

export const getTeachers = async ({ token }) => {
  try {
    const response = await fetch(`${baseUrl}/api/v1/teachers`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error(e.getMessage());
  }
};

export const getTeacher = async ({ token, id }) => {
  try {
    const response = await fetch(`${baseUrl}/api/v1/teachers/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error(e.getMessage());
  }
};

export const addTeacher = async ({ token, teacher }) => {
  try {
    const response = await fetch(`${baseUrl}/api/v1/teachers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify({ teacher: teacher }),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error(e.getMessage());
  }
};

export const updateTeacher = async ({ token, teacher }) => {
  try {
    const response = await fetch(`${baseUrl}/api/v1/teachers/${teacher.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify({ teacher: teacher }),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error(e.getMessage());
  }
};

export const deleteTeacher = async ({ token, teacher }) => {
  try {
    const response = await fetch(`${baseUrl}/api/v1/teachers/${teacher.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error(e.getMessage());
  }
};

