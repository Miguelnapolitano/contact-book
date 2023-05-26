import { Client } from "./clients.entities";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";


@Entity('contacts')
export class Contact {
    
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'varchar', length: 45})
    name: string

    @Column({ type: 'varchar', length: 45, unique: true })
    email: string

    @Column({ type: 'varchar', length: 15, unique: true })
    phone: string

    @CreateDateColumn({ type: 'date' })
    createdAt: string

    @ManyToOne(() => Client)
    client: Client
}