import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import Ride from "./Ride";
@Entity()
export class User {
@PrimaryGeneratedColumn()
    public id: number;
@Column()
    public first_name: string;
@Column()
    public last_name: string;
@OneToMany(
               () => Ride,
               (ride) => ride.user,
               {eager: true, cascade: true}
    )
    public ride: Ride[];
}
export default User;