import { IMovie } from './IMovie';

export interface IMovieApiResponse {
    page: number;
    results: IMovie[];
    total_results: number;
    total_pages: number;
}
