export interface IMenu {
  titulo: string;
  tituloMenu: string;
  iconName: string;
  route?: string;
  disabled?: boolean;
  children?: IMenu[];
  }
