// pages/api/editoras/index.ts
import { NextApiRequest, NextApiResponse } from 'next';
import ControleLivro from '@/classes/controle/ControleLivros';

// Instância exportável de ControleEditora
export const controleLivro = new ControleLivro();

// Função de tratamento de solicitações
export default (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req;

    try {
        switch (method) {
            case 'GET':
                // Instrução c: responder com status 200 e o vetor de livros em formato JSON
                const livros = controleLivro.obterLivros();
                res.status(200).json(livros);
                break;
            
            case 'POST':
                // Instrução d: responder com status 200 e o vetor de livros em formato JSON
                const novoLivro = req.body;
                controleLivro.incluir(novoLivro);
                res.status(200).json({ message: 'Livro incluído com sucesso' });
                break;
                
            default:
                // Instrução d: Tratar status 405 para método não permitido
                res.setHeader('Allow', ['GET', 'POST']);
                res.status(405).json({ message: `Método ${method} não permitido` });
                break;
        }
    } catch (error) {
        // Instrução d: Tratar status 500 para exceções no servidor
        res.status(500).json({ message: 'Erro interno no servidor', error: (error as Error).message });
    }
};
