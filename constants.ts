import { OrgNodeData } from './types';

export const ORG_DATA: OrgNodeData = {
  id: 'pelindung',
  title: 'Pelindung',
  people: [{ name: 'ARIONO, S.Pd., M.Si.', role: 'Pelindung' }],
  children: [
    {
      id: 'penanggungjawab',
      title: 'Penanggungjawab',
      people: [{ name: 'WIDIYANTORO, S.Pd.', role: 'Penanggungjawab' }],
      children: [
        {
          id: 'pembina',
          title: 'Pembina',
          people: [{ name: 'SUPRAT, M.Th.', role: 'Pembina' }],
          children: [
            {
              id: 'kepala',
              title: 'Kepala Perpustakaan',
              people: [{ name: 'Rahayu Fitri, S.Pd.', role: 'Kepala Perpustakaan' }],
              children: [
                {
                  id: 'pelayanan',
                  title: 'Bidang Pelayanan',
                  people: [
                    { name: 'WAHYU SUPRIHATIN S.Pd.', role: 'Bidang Pelayanan' },
                    { name: 'SITI ROCHMAWATI', role: 'Bidang Pelayanan' }
                  ]
                },
                {
                  id: 'pengelolaan',
                  title: 'Bidang Pengelolaan',
                  people: [
                    { name: 'SUTANTI ERNI ASTUTIK, S.Pd.', role: 'Bidang Pengelolaan' },
                    { name: 'Hadi Santoso', role: 'Bidang Pengelolaan' }
                  ]
                },
                {
                  id: 'it',
                  title: 'Bidang IT',
                  people: [
                    { name: 'NUNCKY ASTARINA DEWI, S.Pd.', role: 'Bidang IT' },
                    { name: 'Rifdah Fakhriyah', role: 'Bidang IT' }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export const BACKGROUND_IMAGE = "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000&auto=format&fit=crop";