export interface ProductType {
	id: number;
	name: string;
	originalPrice: number;
	saleOffPrice: number;
	feature: string;
	description: string;
	status: boolean;
	img: string;
	quantity?: number;
}
