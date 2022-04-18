// Generated by https://quicktype.io

export interface Clans {
    tag:                    string;
    name:                   string;
    type:                   string;
    location:               Location;
    badgeUrls:              BadgeUrls;
    clanLevel:              number;
    clanPoints:             number;
    clanVersusPoints:       number;
    requiredTrophies:       number;
    warFrequency:           string;
    warWinStreak:           number;
    warWins:                number;
    warTies:                number;
    warLosses:              number;
    isWarLogPublic:         boolean;
    warLeague:              WarLeague;
    members:                number;
    labels:                 Label[];
    requiredVersusTrophies: number;
    requiredTownhallLevel:  number;
}

export interface BadgeUrls {
    small:  string;
    large:  string;
    medium: string;
}

export interface Label {
    id:       number;
    name:     string;
    iconUrls: IconUrls;
}

export interface IconUrls {
    small:  string;
    medium: string;
}

export interface Location {
    id:          number;
    name:        string;
    isCountry:   boolean;
    countryCode: string;
}

export interface WarLeague {
    id:   number;
    name: string;
}
