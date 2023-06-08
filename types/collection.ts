import {Common, Media} from "@/types/common";
import {Advantage, Image, ProductBanner, ProductFeature, Richtext} from "@/types/component";

export interface Product {
    banner: ProductBanner;
    description: Richtext;
    featureImage: Media;
    features: ProductFeature[];
    advantages: Advantage[];
    benefits: Richtext[];
    title: string;
    slug:string;
    color:string;
}

export interface GroupImage {
    title: string;
    images: Media[];
}

export type Customer = Common & {
    name: string;
    year: number;
    contents: Array<Richtext|Image>;
};