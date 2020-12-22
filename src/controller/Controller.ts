import {Request, Response} from 'express';
import {connection} from "../connection/Connection";
import  User  from "../entity/User";
// import Power from "../entity/Ride";
class Controller {
    constructor() {}
    public getAllUser(req: Request, res: Response) {
        connection
            .then(async connection => {
                const user: User[] = await connection.manager.find(User, 
                    {
                    order: {
                        // name: "ASC",
                        id: "ASC"
                    },
                    
                    // { 
                    //     relations: ['ride'] 
                    // }
                });
                
                res.json(user);
            })
            .catch(error => {
                console.error("Error ", error);
                res.json(error);
            });
    }

    public readRide(req: Request, res: Response) {
        connection
            .then(async connection => {
                const userRepository = await connection.getRepository(User);
                const users = await userRepository.find({ relations: ["ride"] });
               
                res.json(users)
            })

            .catch(error => {
                console.error("Error ", error);
                res.json(error);
            });
    }
    
    
}
export {Controller}