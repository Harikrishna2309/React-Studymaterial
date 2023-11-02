import {useState} from "react";
import { Table } from "react-bootstrap";
//import './style/css';
import AlertBox from "./AlertBox";

function TableForm(){
    const [name,setName]=useState("React Table Example");
    return(
        <>
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        {name}
                    </tr>
                    <tr>
                        <th>#</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>UserName</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Antony</td>
                        <td>@man</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thorton</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
            <AlertBox/>
        </>
    )
}

export default TableForm;