export type Quest = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: string;
  type: string;
  peopleMinMax: [number, number];
  description: string;
  coverImg: string;
  coverImgWebp: string;
};

export type QuestPreview = Omit<Quest, 'description' | 'coverImg' | 'coverImgWebp'>;

export type QuestBooking = {
  id: string;
  location: Location;
  slots: {
    [key: string]: Slot[];
  };
};

export type UserBooking = {
  date: string;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  id: string;
  location: Location;
  quest: QuestPreview;
};

export type Location = {
  address: string;
  coords: [number, number];
};

export type Slot = {
  time: string;
  isAvailable: boolean;
};
