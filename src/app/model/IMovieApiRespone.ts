import { IPopular } from './IPopular';

export interface IMovieApiRespone {
    page: number;
    results: IPopular[];
    total_results: number;
    total_pages: number;
}
