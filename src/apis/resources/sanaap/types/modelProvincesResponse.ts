export type ModelProvincesResponse = {
   id: number;
        is_active: boolean;
        name: string;
        code: string;
        name_split: string;
        creator_user: {
            id: number;
            first_name: string;
            last_name: string;
            username: string;
        },
        country: number;
}[]; 