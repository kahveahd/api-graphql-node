import { Entity,BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Country extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    country_name: string;

    @Column()
    city_name: string;  
}