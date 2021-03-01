
export default interface IProduct {
    _id: string;
    title: string;
    price: number;
    description : string;
    category: string;
    image: string;
    date: Date;
    feat: boolean;
}