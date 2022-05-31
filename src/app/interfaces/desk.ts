/**
 * Interface for desk
 */
export interface Desk {
  id: string;
  index: number,
  qrCode: string;
  serialNumber: string;
  category: string;
  description: string;
  internalRef: string;
  price: number;
  active: boolean;
  created: Date;
};