export class ModalBase {
  destroy: Function=()=>void{}
  componentIndex: number=0;
  closeModal() {
    this.destroy();
  }
}
