export const apiRegisterTT = async (params) => {
    const body = {
        dni: params.dni,
        nombre: params.nombre,
        apellido: params.apellido,
        direccion: params.direccion,
        telefono: params.telefono,
        mail: params.mail,
    };

    const response = await fetch("http://superpago.com.ar/mobile/tercertiempo", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });

    const responseJson = await response.json();

    return responseJson;
};