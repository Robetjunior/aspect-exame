import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Medico } from './Medico';

@Entity('disponibilidade_medica')
export class DisponibilidadeMedica {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Medico, medico => medico.disponibilidades, { onDelete: 'CASCADE' })
  medico: Medico;

  @Column({ type: 'timestamp' })
  dataHoraInicio: Date;

  @Column({ type: 'timestamp' })
  dataHoraFim: Date;
}
