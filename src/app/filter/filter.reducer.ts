import * as fromFiltro from './filter.actions';

const estadoInicial:   fromFiltro.filtrosValidos = 'todos';

export function filtroReducer(state = estadoInicial, accion: fromFiltro.Acciones){
  switch (accion.type) {
    case fromFiltro.SET_FILTER:
      return accion.filtro;
    default:
      return state;
  }
}
