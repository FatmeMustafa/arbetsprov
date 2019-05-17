import React, { Component } from 'react';

// Stylesheet imports.
import './DataTable.css';

class DataTable extends Component {

    render() {
        return (
            <table className="dataTable">
                <tbody>
                    <tr>
                        <th>Marknad</th>
                        <th>Pris</th> 
                        <th>Valuta</th>
                        <th>Start och Slut</th>
                    </tr>
                    {/*Mapping the priceDetails data from Dashboard componnet.*/}
                    {this.props.priceDetails.map((priceDetail, index) => {
                           let checkNull = (priceDetail.ValidUntil === "NULL") ? "" : priceDetail.ValidUntil;
                        
                        return (
                            <tr key={index}>
                                <td>{priceDetail.MarketId}</td>
                                <td>{parseFloat(Math.round(priceDetail.UnitPrice * 100) / 100).toFixed(2)}</td> 
                                <td>{priceDetail.CurrencyCode}</td>
                                <td>{priceDetail.ValidFrom}  -  {checkNull}</td>
                            </tr>
                        )
                    })
                    }
                </tbody>
          </table>
        ) 
    }
}
export default DataTable;


//27773-02 is one product if that product has different price compared to other things then show 

//if (priceDetail.UnitPrice && priceDetail.CurrencyCode && priceDetail.MarketId && priceDetail.ValidFrom && priceDetail.ValidUntil)
