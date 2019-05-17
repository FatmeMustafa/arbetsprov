import React, { Component } from 'react';
import Papa from 'papaparse';
import Button from 'react-bootstrap/Button';

// Existing component imports.
import DataTable from './DataTable';

class Dashboard extends Component {

    // Storing data from the CSV file as a state.
    constructor(props) {
        super(props);
        this.state = {
            priceDetail: [],
            showTable: false,
        }
    }
    
    // Parsing local CSV file with Papaparse.
    componentWillMount() {
        let csvFilePath = require("./data.csv");
        Papa.parse(csvFilePath, {
            header: true,
            download: true,
            skipEmptyLines: true,
            // Executing the function when parsing is complete. 
            complete: this.updateData
        });
    }
    
    // Setting the priceDetail state to the parse results.
    updateData = (result) => {
        let csvData = result.data;
        this.setState({ priceDetail: csvData });
    }
    
    // Updating the showTable state to show/hide table depending on the boolean value. 
    toggleTable = () => {
        this.setState({ showTable: !this.state.showTable })
    }

    render() {
        // Adding inline style for button. 
        const styleToggleBTN = {
            width: "30%",
            fontFamily: "Trebuchet MS",
            margin: "0 auto",
            marginBottom: "20px",
            display: "block", 
        }

        // Sending priceDetails data to the DataTable component.
        return ( 
            <div>
                <Button style={styleToggleBTN} variant="success" onClick={this.toggleTable}>{this.state.showTable ? "click to hide table!" : "click to show table!"}</Button>
                { this.state.showTable ? 
                    <DataTable priceDetails={this.state.priceDetail}/>
                : null }
            </div>
        )
      }
    }
export default Dashboard;