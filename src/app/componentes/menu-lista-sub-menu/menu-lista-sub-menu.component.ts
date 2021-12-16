import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IMenu } from 'src/app/interface/menu';
import { MenuLateralService } from 'src/app/servicios/menu-lateral.service';
//import { IMenuLateral } from '@app/interface/inicio';
//import { MenuLateralService } from '@app/servicio/menu-lateral.service';

@Component({
  selector: 'app-menu-lista-sub-menu',
  templateUrl: './menu-lista-sub-menu.component.html',
  styleUrls: ['./menu-lista-sub-menu.component.css'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({transform: 'rotate(0deg)'})),
      state('expanded', style({transform: 'rotate(180deg)'})),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class MenuListaSubMenuComponent implements OnInit {
  expanded: boolean=false;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input()
  item!: IMenu;
  @Input()
  depth!: number;

  @Output() tituloModuloF = new EventEmitter();
  @Output() tituloModuloF2 = new EventEmitter();
  @Output() tituloModuloF3 = new EventEmitter();

  constructor(public router: Router, public navService: MenuLateralService) {
    if (this.depth === undefined) {
      console.log('pao100');
      this.depth = 0;
    }
  }

  ngOnInit() {

    this.navService.currentUrl.subscribe((url: string) => {
      if (this.item.route && url) {
        console.log('pao200',this.item.route);
        // console.log(`Checking '/${this.item.route}' against '${url}'`);
        this.expanded = url.indexOf(`/${this.item.route}`) === 0;
        this.ariaExpanded = this.expanded;
        // console.log(`${this.item.route} is expanded: ${this.expanded}`);
      }
    });
  }

  onItemSelected($event: any, item: IMenu) {
    console.log('paso,',item);
    console.log('largo itrm,', item.children?.length);
    if (item.route === 'cerrar'){
      console.log('paso1111');
      this.router.navigate(['/hospital']);
    }else{
    if (!item.children || !item.children?.length) {
      console.log('paso 1');
      // this.router.navigate([item.route]);
      this.tituloModuloF.emit('  -  ( ' + item.titulo + ' )');
      this.tituloModuloF2.emit('  -  ( ' + item.titulo + ' )');
      console.log('paso...',item.titulo );
      this.router.navigate(['' + item.route]);
    //  this.navService.closeNav();
    }
    if (item.children && item.children?.length) {
      this.tituloModuloF.emit('  -  ( ' + item.titulo + ' )');
      this.tituloModuloF2.emit('  -  ( ' + item.titulo + ' )');
      this.expanded = !this.expanded;
    }
  }

  }

  traeTituloModulo(valor:any){
    this.tituloModuloF.emit(valor);
    this.tituloModuloF2.emit(valor);
  }

  traeTituloModulo2(valor:any){
    this.tituloModuloF.emit(valor);
  }

  getMenuChildren() {
    return this.item.children?.filter((item) => item.disabled === false);
  }

}
