import { controleLivro } from ".";

import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req;
    const { codigo } = req.query;

    try {
        switch (method) {
            case 'DELETE':
                // Instrução c: responder com status 200 e o vetor de editoras em formato JSON
                controleLivro.excluir(Number(codigo));
                res.status(200).json({ message: 'Livro excluído com sucesso' });
                break;

            default:
                // Instrução d: Tratar status 405 para método não permitido
                res.setHeader('Allow', ['DELETE']);
                res.status(405).json({ message: `Método ${method} não permitido` });
                break;
        }
    } catch (error) {
        // Instrução d: Tratar status 500 para exceções no servidor
        res.status(500).json({ message: 'Erro ao excluir o livro', error: (error as Error).message });
    }
};
