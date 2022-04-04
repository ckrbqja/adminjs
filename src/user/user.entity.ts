import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";


@Entity()
export class User extends BaseEntity {
    @PrimaryColumn({ type: 'varchar', length: 50, comment: '사용자 아이디' })
    id: string;

    @Column({ type: 'varchar', length: '100', comment: '사용자 이메일' })
    userEmail: string;

    @Column({ type: 'varchar', length: '15', comment: '사용자 닉네임' })
    userNickname: string;

    @Column({ type: 'tinyint', comment: '마케팅 선택동의', nullable: true })
    marketingFlag?: boolean;

    @Column({
        type: 'varchar',
        length: '200',
        comment: '푸쉬토큰',
        nullable: true,
    })
    pushToken?: string;

    @Column({
        type: 'int',
    })
    inviteCode: number;
}