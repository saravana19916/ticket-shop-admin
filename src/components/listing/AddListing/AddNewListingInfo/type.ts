export interface IListingInfoProps {
  listingType: string | null;
  listingName: string | null;
  listingCategory: string | null;
  listingSubCategory: string | null;
  suitability: string[] | null;
  ageLimit: string[] | null;
  description: string | null;
  language: string[] | null;
  subtitles: string | null;
  contentGrading: string[] | null;
  facilities: string[] | null;
}
