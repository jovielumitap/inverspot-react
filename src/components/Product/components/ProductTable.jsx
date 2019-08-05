import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community';

import './ProductTable.scss';

import productProps from '../../../propTypes/productProps';

import { formatMoney } from '../../../helpers/tools';
import { haveStock } from '../../../helpers/product';

class ProductTable extends Component {
  static propTypes = {
    product: productProps.isRequired,
    authUser: PropTypes.object.isRequired,
    addProducts: PropTypes.func.isRequired,
    handleOnClick: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    const { product } = this.props;

    this.defaultColDef = {
      filter: true,
      sortable: true,
      resizable: true,
      editable: false,
    };

    this.state = {
      columnDefs: [
        {
          headerName: 'ID',
          field: 'crmid',
          width: 75,
        },
        {
          headerName: 'Categorias',
          field: 'categorias',
          width: 150,
        },
        {
          headerName: 'Nombre',
          field: 'nombre',
          width: 275,
        },
        {
          headerName: 'Marca',
          field: 'marca',
        },
        {
          headerName: 'Precio Unitario',
          field: 'unit_price',
          cellStyle: { textAlign: 'right' },
          width: 175,
          valueGetter: params => (`$ ${formatMoney(params.data.unit_price)}`),
        },
      ],
      rowData: [...product.products],
    };
  }

  componentWillReceiveProps = (next) => {
    const { product } = next;
    const { filters } = product;
    if (filters.length > 0) {
      this.callFiltering(filters);
    }
    this.setState({ rowData: [...product.productsByArray] });
  }

  openModal = (options) => {
    const { handleOnClick } = this.props;
    handleOnClick('options', options);
  }

  onSelectionChanged = (row) => {
    const { authUser, addProducts } = this.props;
    const [product] = row.api.getSelectedRows();
    const { Products } = product;
    if (Products.length > 1) {
      this.openModal(Products);
    } else if (haveStock(Products[0], authUser)) {
      const element = {
        dataset: {
          crmid: Products[0].crmid,
          parentid: Products[0].parentId,
        },
      };
      addProducts(element);
    } else {
      return null;
    }
    return null;
  }

  onCellKeyPress = (row) => {
    const { keyCode } = row.event;
    if (keyCode === 13) {
      row.event.target.click();
    }
  }

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

  onGridReady = (params) => { this.gridApi = params.api; }

  render() {
    const {
      columnDefs,
      rowData,
    } = this.state;
    return (
      <div
        className="ag-theme-balham"
        style={{ height: '100%', width: '100%' }}
      >
        <AgGridReact
          defaultColDef={this.defaultColDef}
          columnDefs={columnDefs}
          rowData={rowData}
          floatingFilter
          rowSelection="single"
          onSelectionChanged={this.onSelectionChanged}
          onCellKeyPress={this.onCellKeyPress}
          onGridReady={this.onGridReady}
        />
      </div>
    );
  }
}

export default ProductTable;
