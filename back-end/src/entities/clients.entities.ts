import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Contact } from "./contacts.entities";

@Entity('clients')
export class Client {
    
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

    @OneToMany(() => Contact, contacts => contacts.client)
    contacts: Contact[]
}