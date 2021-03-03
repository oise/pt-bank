export interface SearchParams {
  search: string;
  order?: 'ASC' | 'DESC' | 'default';
  date?: boolean;
  amount?: boolean;
  beneficiary?: boolean;
}
