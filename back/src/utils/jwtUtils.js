import jwt from 'jsonwebtoken';
const key = 'senha==@diario'


export function gerarToken (info){
    return jwt.sign(info, key)
}

export function autenticar(req,resp,next) {
    return auten(req, resp, next);
}


export function auten(req,resp,next) {
    try {
        let token = req.headers['insirir-token'];

        if (token === undefined) {
            token = req.query['query-token']
        }

        let si = jwt.verify(token, key);

        req.use = si;
        next()

    } catch (e) {
        resp.status(401).end();
    }
}