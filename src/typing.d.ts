export interface DetailType {
    _id: string;
    title: string;
    title_jp: string;
    subtitle?: string;
    subtitle_jp?: string;
    category: string;
    category_jp: string;
    description: string;
    description_jp: string;
    extraDescription: string;
    extraDescription_jp: string;
    isNews?: boolean;
    image: string;
    icon?: React.ReactNode;
    extraImage: string;
    _createdAt: string;
}


export type PageType = "news" | "recruitment" | "ssw" | "educational" | "travel" | "realstate" | "details" | "others";