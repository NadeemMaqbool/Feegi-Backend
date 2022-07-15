import { BaseEntity, Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity('user_details')
export class UserDetails extends BaseEntity {
    @PrimaryColumn("uuid", { primary: true })
    uuid: string;

    @Column("varchar", { length: 255, nullable: true })
    address: string;

    @Column("varchar", { length: 255, nullable: true })
    city: string;

    @Column("varchar", { length: 255, nullable: true })
    state: string;

    @Column("varchar", { length: 255, nullable: true })
    zip: string;

    @Column("varchar", { length: 255, nullable: true })
    phone: string;

    @Column("varchar", { length: 255, nullable: true })
    country: string;

    @Column("varchar", { length: 255, nullable: true })
    avatar: string;

    @CreateDateColumn({ type: "timestamp" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updated_at: Date;
}