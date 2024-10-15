import jwt from 'jsonwebtoken';
const key = 'senha==@diario'


export function gerarToken(info) {
    return jwt.sign(info, key, { expiresIn: '1h' }); 
}


export function autenticar(req,resp,next) {
    return auten(req, resp, next);
}


export function auten(req, resp, next) {
    try {
        let token = req.headers['authorization'];  

        if (!token) {
            token = req.query['query-token'];  
        }

        if (!token) {
            return resp.status(401).send({ message: 'Token não fornecido' });
        }

        if (token.startsWith('Bearer ')) {
            token = token.slice(7, token.length);  
        }

        const decoded = jwt.verify(token, key);

        
        req.use = decoded;

        next();  
    } catch (error) {
        resp.status(401).send({ message: 'Token inválido ou expirado' });
    }
}
