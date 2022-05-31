/**
 * Interface for Company(Business)
 */
import { BusinessTypes } from "./business.types";

export interface Company {
  name: string;
  businessType: string;
  registrationNumber: number;
}