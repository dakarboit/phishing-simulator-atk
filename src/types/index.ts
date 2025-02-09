export interface Campaign {
  id: string;
  name: string;
  description: string;
  status: 'draft' | 'active' | 'completed';
  startDate: Date;
  endDate?: Date;
  targetGroups: string[];
  templateId: string;
  stats: CampaignStats;
}

export interface CampaignStats {
  totalEmails: number;
  opened: number;
  clicked: number;
  credentialsEntered: number;
}

export interface Template {
  id: string;
  name: string;
  category: 'invoice' | 'credential' | 'alert' | 'custom';
  subject: string;
  content: string;
  riskLevel: 'low' | 'medium' | 'high';
}