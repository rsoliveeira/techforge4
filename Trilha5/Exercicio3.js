var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var FavoriteManager = /** @class */ (function () {
    function FavoriteManager() {
        this.favorites = [];
    }
    return FavoriteManager;
}());
var MoviesFavoriteManager = /** @class */ (function (_super) {
    __extends(MoviesFavoriteManager, _super);
    function MoviesFavoriteManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MoviesFavoriteManager.prototype.addFavorite = function (item) {
        if (this.favorites.indexOf(item) === -1) {
            this.favorites.push(item);
            this.favorites.sort();
        }
    };
    MoviesFavoriteManager.prototype.getFavorites = function () {
        return this.favorites;
    };
    return MoviesFavoriteManager;
}(FavoriteManager));
var BooksFavoriteManager = /** @class */ (function (_super) {
    __extends(BooksFavoriteManager, _super);
    function BooksFavoriteManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BooksFavoriteManager.prototype.addFavorite = function (item) {
        var index = this.favorites.indexOf(item);
        if (index !== -1) {
            this.favorites.splice(index, 1);
        }
        this.favorites.unshift(item);
    };
    BooksFavoriteManager.prototype.getFavorites = function () {
        return this.favorites;
    };
    return BooksFavoriteManager;
}(FavoriteManager));
var moviesManager = new MoviesFavoriteManager();
moviesManager.addFavorite("A Chegada");
moviesManager.addFavorite("Um Contratempo");
moviesManager.addFavorite("A Chegada");
moviesManager.addFavorite("Avatar");
console.log("Filmes Favoritos:", moviesManager.getFavorites());
var booksManager = new BooksFavoriteManager();
booksManager.addFavorite("O Pequeno Príncipe");
booksManager.addFavorite("Desaparecido Para Sempre");
booksManager.addFavorite("O Pequeno Príncipe");
booksManager.addFavorite("A Mandíbula de Caim");
console.log("Livros Favoritos:", booksManager.getFavorites());
