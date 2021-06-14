import React,{Component} from 'react';
import { Table } from 'react-bootstrap';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { AddCustomerModal } from './AddEmpModal';
import { EditCustomerModal } from './EditEmpModal';
import axios from 'axios';  


class Customers extends Component{

    constructor(props){
        super(props);
        this.state={
		  customers: [],
		  addModalShow:false, 
		  editModalShow:false
		}
    }

    refreshList = () => {
      axios.get("http://localhost:8000/api/customer")
      .then(res => this.setState({ customers: res.data }))
      .catch(err => console.log(err));
    };

    componentDidMount(){
        this.refreshList();
    }
    
    render(){
        const { customers } = this.state;
		let addModalClose=()=>this.setState({ addModalShow:false });
        let editModalClose=()=>this.setState({ editModalShow:false });
		
        return(
            <div >
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th>Customer ID</th>
                        <th>Customer Name</th>
                        <th>Customer Department</th>
                        <th>Customer Date</th>
                        <th>Customer Pic</th>
                      </tr>
                    </thead>
                    <tbody>
                        {customers.map(cus=>
                            <tr key={cus.EmployeeId}>
                                <td>{cus.EmployeeId}</td>
                                <td>{cus.EmployeeName}</td>
                                <td>{cus.Department}</td>
                                <td>{cus.DateOfJoining}</td>
                                <td>{cus.ProfilePic}</td>
                            </tr>)}
                    </tbody>
                </Table>
				
				<ButtonToolbar>
                    <Button variant='primary'
                      onClick={()=>this.setState({addModalShow:true})}>
                      Add Customer
					</Button>

                    <AddEmpModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
				
            </div>
        )
    }
}

export default Customers;