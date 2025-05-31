import { RowDataPacket } from "mysql2";

interface CategoryDtoRequest {
    name:string;
    owner_id: number;
}

interface CategoryDtoResponse extends RowDataPacket {
    id: number;
    name: string;
    owner_id: number;
    created_at: Date;
}


export { CategoryDtoRequest, CategoryDtoResponse };