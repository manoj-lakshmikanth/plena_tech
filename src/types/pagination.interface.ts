export interface PaginationProps{
    limitPerPage: number;
    upperLimit: number;
    lowerLimit: number;
    totalItems: number;
    totalPages: number;
    handlePrev: () => void;
    handleNext: () => void;
}