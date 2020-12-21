import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import User from "./User";
@Entity()
export class Ride {
    @PrimaryGeneratedColumn()
    public id: number;
    @Column()
    public from_city_name: string;
    @Column()
    public to_city_name: string;
    @Column()
    public user_id: number;
    @ManyToOne(() => User, (user) => user.ride)
    public user: User;
}
export default Ride;