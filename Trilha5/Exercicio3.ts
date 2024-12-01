abstract class FavoriteManager {
    protected favorites: string[] = [];
    abstract addFavorite(item: string): void;
    abstract getFavorites(): string[];
}

class MoviesFavoriteManager extends FavoriteManager {
    addFavorite(item: string): void {
        if (this.favorites.indexOf(item) === -1) {
            this.favorites.push(item);
            this.favorites.sort();
        }
    }
    getFavorites(): string[] {
        return this.favorites;
    }
}

class BooksFavoriteManager extends FavoriteManager {
    addFavorite(item: string): void {
        const index = this.favorites.indexOf(item);
        if (index !== -1) {
            this.favorites.splice(index, 1);
        }
        this.favorites.unshift(item);
    }
    getFavorites(): string[] {
        return this.favorites;
    }
}

const moviesManager = new MoviesFavoriteManager();
moviesManager.addFavorite("A Chegada");
moviesManager.addFavorite("Um Contratempo");
moviesManager.addFavorite("A Chegada");
moviesManager.addFavorite("Avatar");
console.log("Filmes Favoritos:", moviesManager.getFavorites());

const booksManager = new BooksFavoriteManager();
booksManager.addFavorite("O Pequeno Príncipe");
booksManager.addFavorite("Desaparecido Para Sempre");
booksManager.addFavorite("O Pequeno Príncipe");
booksManager.addFavorite("A Mandíbula de Caim");
console.log("Livros Favoritos:", booksManager.getFavorites());
