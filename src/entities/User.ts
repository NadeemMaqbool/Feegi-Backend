import { BaseEntity, Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm"
import { UserDetails } from "./UserDetails";

export enum UserTypes {
    SUPER_ADMIN = 'super admin',
    OWNER = 'owner',
    RENTER = 'renter',
    SUB_RENTER = 'sub renter',
    GUEST = 'guest'   
}

export enum UserStatus {
    ACTIVE = 'Active',
    INACTIVE = 'Inactive'
}

export enum UserIsVerified {
    YES = 'Yes',
    NO = 'No'
}

@Entity('user')
export class User extends BaseEntity { 
    @PrimaryColumn("uuid", { primary: true })
    uuid: string;

    @Column("varchar", { length: 255, nullable: false })
    first_name: string;

    @Column("varchar", { length: 255, nullable: false })
    last_name: string;

    @Column("varchar", { length: 255, unique: true, nullable: false })
    email: string;

    @Column("varchar", { length: 255 })
    password: string;

    @Column("varchar", { length: 255, default: '' })
    remember_token: string;

    @Column({type: "enum", enum: UserIsVerified, default: UserIsVerified.NO })
    is_verified: UserIsVerified;

    @Column({type: "enum",enum: UserStatus, default: UserStatus.INACTIVE })
    status: UserStatus;

    @Column({type: "enum",enum: UserTypes, nullable: false})
    user_type: UserTypes;

    @CreateDateColumn({ type: "timestamp" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updated_at: Date;

    @OneToOne(() => UserDetails)

    @JoinColumn()
    user_details: UserDetails;

}