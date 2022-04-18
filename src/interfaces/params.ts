export interface Params {
  name?: string;
  warFrequency?: "always" | "twice a week" | "never" | "one a week" | "rarely";
  location?: string;
  minMembers?: number;
  maxMembers?: number;
  minClanPoints?: number;
  limit?: number;
  after?: string;
  before?: string;
  labelIds?: string;
}
