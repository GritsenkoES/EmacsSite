export abstract class RootApi{
  abstract protocol:string;
  private host:string='212.233.88.245';
  private app_prefix:string='application';
  private api_version:string='api/v1';
  private zone:string='site'


  getRoot():string{
    return this.protocol+'://'+this.host  + '/' + this.app_prefix + '/' + this.api_version+'/' + this.zone;
  }
}
