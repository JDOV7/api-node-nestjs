import { Tier } from '@aws-sdk/client-s3';

export enum TipoRecuperacionObjecto {
  Bulk = 'Bulk',
  Expedited = 'Expedited',
  Standard = 'Standard',
}
