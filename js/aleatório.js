export function aleatório(lista) {
        const posicao = Math.floor(Math.random() * lista.length);
        return lista[posicao];
    }
