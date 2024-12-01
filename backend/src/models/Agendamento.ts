// src/models/Agendamento.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Exame } from './Exame';
import { Medico } from './Medico';

@Entity()
export class Agendamento {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Exame)
  exame!: Exame;

  @ManyToOne(() => Medico, medico => medico.agendamentos)
  medico!: Medico;

  @Column()
  dataHora!: Date;

  @Column({ nullable: true })
  observacoes?: string;
}
