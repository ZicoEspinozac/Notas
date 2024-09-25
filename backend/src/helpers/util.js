// Crear serializador de datos de respuesta
export function serialize(res, data, code) {
    if (code == 400) {
        return res.status(code).json({
            error: data,
            code: code
        });
    } else {
        return res.status(code).json({
            data: data,
            code: code
        });
    } 
}
