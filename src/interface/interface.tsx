export interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}
export interface ContentProps {
  selectedGenreId:number,
  selectedGenre: GenreResponseProps;
}
export interface HeaderProps {
  selectedGenre: GenreResponseProps;
}
export interface sidebarProps{
  handleClickButton: (id:number) => void,
  selectedGenreId:number
}
export interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}
export interface MovieCardProps {
  title: string;
  poster: string;
  rating: string;
  runtime: string;
}