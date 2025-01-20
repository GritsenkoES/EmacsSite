export abstract class RootApi{
  abstract protocol:string;
  private host:string='80.78.243.81';
  private app_prefix:string='application';
  private api_version:string='api/v1';
  private zone:string='site'
  private port:string='80';

  getRoot():string{
    return this.protocol+'://'+this.host + ':' +this.port + '/' + this.app_prefix + '/' + this.api_version+'/' + this.zone;
  }
}
