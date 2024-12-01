import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Agendamento } from './Agendamento';
import { DisponibilidadeMedica } from './DisponibilidadeMedica';

@Entity()
export class Medico {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ unique: true })
  crm: string;

  @Column()
  especialidade_medica: string;

  @OneToMany(() => Agendamento, agendamento => agendamento.medico)
  agendamentos: Agendamento[];

  @OneToMany(() => DisponibilidadeMedica, disponibilidade => disponibilidade.medico)
  disponibilidades: DisponibilidadeMedica[];
}
