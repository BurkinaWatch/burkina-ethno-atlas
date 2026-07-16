export interface Famille {
  nom: string;
  description?: string;
}

export interface GroupeEthnique {
  id: string;
  nom: string;
  variantes?: string[];
  regionId: string;
  localisation: string;
  langue: string;
  familleLinguistique: string;
  population?: string;
  specificitesCulturelles: string;
  traditions: string;
  organisationSociale: string;
  croyances: string;
  familles: Famille[];
  sources?: string[];
}

export interface Region {
  id: string;
  nom: string;
  chef_lieu: string;
  population?: string;
  superficie?: string;
  description: string;
  couleur: string;
  groupesEthniques: GroupeEthnique[];
}
