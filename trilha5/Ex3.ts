abstract class FavoriteManager {
    protected favorites: string[] = [];

    abstract addFavorite(item: string): void;
    abstract getFavorites(): string[];
}

class MoviesFavoriteManager extends FavoriteManager {
    addFavorite(item: string): void {
        if (!this.favorites.includes(item)) {
            this.favorites.push(item);
        }
    }

    getFavorites(): string[] {
        return [...this.favorites].sort();
    }
}

class BooksFavoriteManager extends FavoriteManager {
    addFavorite(item: string): void {
        this.favorites = this.favorites.filter(f => f !== item);
        this.favorites.unshift(item);
    }

    getFavorites(): string[] {
        return this.favorites;
    }
}
