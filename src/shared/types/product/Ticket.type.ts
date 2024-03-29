export interface Price {
    full: number;
    discount: number;
  }
  
export interface Rating {
    reviewsCount: number;
    value: number;
  }
  
export interface Destination {
    id: string;
    name: string;
    location: string;
    image: string;
    description: string;
    price: Price;
    rating: Rating;
    createdAt: string;
    updatedAt: string;
  }
  
export interface DestinationData {
    data: Destination[];
  }