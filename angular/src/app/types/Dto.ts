export interface AllOurServicesDto{
  services: OurService[];
}
export interface OurService{
  id:number
  title:string
  updated:string
  created:string
  updatedBy:number
}
