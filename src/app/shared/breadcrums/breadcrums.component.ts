import { Router, ActivationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  styles: []
})
export class BreadcrumsComponent implements OnInit {

  title: string;
  metatag: MetaDefinition;

  constructor(
    private _router: Router, // Obtener informacion y parametros de la ruta
    private _title: Title, // Clase para manipular el titulo de la pagina
    private _meta: Meta // Clase para manipular los metatags de la aplicacion
  ) {
    this.getRouterData().subscribe(
      data => {
        this.title = data.titulo;
        this._title.setTitle(this.title);
        this.metatag = {
          name: 'description',
          content: this.title
        };
        this._meta.updateTag(this.metatag);
      }
    );
  }

  ngOnInit() {
  }

  getRouterData() {
    return this._router.events.pipe(
      filter( event => event instanceof ActivationEnd ),
      filter( (event: ActivationEnd) => event.snapshot.firstChild === null ),
      map( (event: ActivationEnd) => event.snapshot.data )
    );
  }

}
