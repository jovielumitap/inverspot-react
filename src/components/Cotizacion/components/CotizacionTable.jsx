import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community';

import PropTypes from 'prop-types';
import EmptyElement from '../../EmptyElement';
import { formatMoney } from '../../../helpers/tools';

class OrderTable extends Component {
  static propTypes = {
    cotizacion: PropTypes.object.isRequired,
    dispatchSelectCotizacion: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.defaultColDef = {
      filter: true,
      sortable: true,
      resizable: true,
    };

    this.state = {
      columnDefs: [
        {
          headerName: 'ID',
          field: 'label',
          width: 75,
        },
        {
          headerName: 'Cliente',
          field: 'accountname',
          width: 75,
        },
        {
          headerName: 'Total',
          field: 'hdnGrandTotal',
          width: 100,
          cellStyle: { textAlign: 'right' },
          valueGetter: params => (`$ ${formatMoney(params.data.hdnGrandTotal)}`),
        },
        {
          headerName: 'Fecha Creacion',
          field: 'createdtime',
          width: 150,
        },
      ],
    };
  }

  componentWillReceiveProps(news) {
    const { cotizacion } = news;
    const { filters } = cotizacion;
    if (filters.length > 0) this.callFiltering(filters);
  }

  onSelectionChanged = (row) => {
    const { dispatchSelectCotizacion } = this.props;
    const [cotizacion] = row.api.getSelectedRows();
    // console.log({ cotizacion });
    const { crmid } = cotizacion;
    dispatchSelectCotizacion(crmid);
  };

  onCellKeyPress = (row) => {
    const { keyCode } = row.event;
    if (keyCode === 13) {
      row.event.target.click();
    }
  };

  onGridReady = (params) => {
    this.gridApi = params.api;
    this.columnApi = params.columnApi;
    this.gridApi.sizeColumnsToFit();
  };

  callFiltering = async (filters) => {
    await this.gridApi.setFilterModel(null);
    const search = await filters.find(x => x.type === 'search');
    if (search !== undefined) {
      const word = search.value;
      this.gridApi.setQuickFilter(word);
      filters.forEach((element) => {
        if (element.type !== 'search') {
          const filterComp = this.gridApi.getFilterInstance(element.column);
          filterComp.setModel({ type: 'contains', filter: word });
        }
      });
    } else {
      filters.forEach((element) => {
        const filterComp = this.gridApi.getFilterInstance(element.column);
        filterComp.setModel({ type: 'contains', filter: '' });
      });
    }
    this.gridApi.onFilterChanged();
  }

  /* Render */
  renderTable = () => {
    const { cotizacion } = this.props;
    const { columnDefs } = this.state;
    if (cotizacion.cotizaciones.length > 0) {
      return (
        <AgGridReact
          defaultColDef={this.defaultColDef}
          columnDefs={columnDefs}
          rowData={cotizacion.cotizaciones}
          floatingFilter
          rowSelection="single"
          onSelectionChanged={this.onSelectionChanged}
          onCellKeyPress={this.onCellKeyPress}
          onGridReady={this.onGridReady}
        />
      );
    }
    return <EmptyElement />;
  };

  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{ height: '100%', width: '100%' }}
      >
        {this.renderTable()}
      </div>
    );
  }
}

export default OrderTable;
