import { createContext, useContext, useState } from "react";

export const FavortiosContext = createContext();
FavortiosContext.displayName = "Favoritos";

export default function FavoritosProvider({ children }) {
    const [favorito, setFavorito] = useState([]);

    return (
        <FavortiosContext.Provider
            value={{ favorito, setFavorito }}>
            {children}
        </FavortiosContext.Provider>
    )
}
export function useFavoritoContext() {
    const { favorito, setFavorito } = useContext(FavortiosContext);

    function adicionarFavorito(novoFavorito) {
        const favoritoRepitido = favorito.some(item => item.id === novoFavorito.id)
        let novaLista = [...favorito];
        if (!favoritoRepitido) {
            novaLista.push(novoFavorito);
            return setFavorito(novaLista);
        }

        return setFavorito(novaLista.filter(fav => fav.id !== novoFavorito.id));
    }
    return {
        favorito,
        adicionarFavorito
    }
}
