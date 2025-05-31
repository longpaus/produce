import { RowDataPacket } from "mysql2";

interface UserDtoRequest {
    username: string;
    email: string;
    password_hash: string;
}

interface UserDtoResponse extends RowDataPacket {
    id: number;
    username: string;
    email: string;
    password_hash: string;
    created_at: Date;
}


export { UserDtoRequest, UserDtoResponse };