import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community';

import PropTypes from 'prop-types';
import orderProps from '../../../propTypes/orderProps';

import EmptyElement from '../../EmptyElement';
import { formatMoney } from '../../../helpers/tools';

class OrderTable extends Component {
  static propTypes = {
    order: orderProps.isRequired,
    dispatchSelectOrder: PropTypes.func.isRequired,
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
          field: 'salesorder_no',
          width: 50,
        },
        {
          headerName: 'Cliente',
          field: 'accountname',
          width: 125,
        },
        {
          headerName: 'Total',
          field: 'hdnGrandTotal',
          width: 100,
          cellStyle: { textAlign: 'right' },
          valueGetter: params => (`$ ${formatMoney(params.data.hdnGrandTotal)}`),
        },
        {
          headerName: 'Estado',
          field: 'sostatus',
          width: 60,
        },
        {
          headerName: 'Movimiento de almacen',
          field: 'estado_mda',
          width: 100,
        },
        {
          headerName: 'Flujo de efectivo',
          field: 'estado_fde',
          width: 100,
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
    const { order } = news;
    const { filters } = order;
    if (filters.length > 0) this.callFiltering(filters);
  }

  onSelectionChanged = (row) => {
    const { dispatchSelectOrder } = this.props;
    const [order] = row.api.getSelectedRows();
    const { crmid } = order;
    dispatchSelectOrder(crmid);
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
    const { order } = this.props;
    const { columnDefs } = this.state;
    if (order.orders.length > 0) {
      return (
        <AgGridReact
          defaultColDef={this.defaultColDef}
          columnDefs={columnDefs}
          rowData={order.orders}
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
