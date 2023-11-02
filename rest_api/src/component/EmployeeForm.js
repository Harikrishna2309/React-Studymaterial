import React,{useState} from "react";
import{Form,Button,Container,Alert}from'react-bootstrap';

function EmployeeForm(){
    const[enteredId,setId]=useState('');
    const[enteredName,setName]=useState('');
    const[enteredRole,setRole]=useState("");
    const IdChangeHandler=(event)=>{
        setId(event.target.value);
    }
    const nameChangeHandler=(event)=>{
        setName(event.target.value);
    }
    const roleChangeHandler=(event)=>{
        setRole(event.target.value);
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        setId('');
        setName("");
        setRole('');

        return alert('Entered value are: '+enteredId+","+enteredName+","+enteredRole)
    };

    return(
        <div>
            <Alert variant="primary">
                <Container>
                    <Form onSubmit={submitHandler}>
                        <Form.Group controlId="form.id">
                            <Form.Label>ID</Form.Label>
                            <Form.Control type="number" value={enteredId} onChange={IdChangeHandler}
                            placeholder="Enter Id" required/>
                        </Form.Group>
                        <Form.Group controlId="form.Name">
                            <Form.Label>User name</Form.Label>
                            <Form.Control type="text" value={enteredName} onChange={nameChangeHandler}
                            placeholder="Enter user name" required/>
                        </Form.Group>
                        <Form.Group controlId="form.Role">
                            <Form.Label>Role</Form.Label>
                            <Form.Control type="text" value={enteredRole} onChange={roleChangeHandler}
                            placeholder="Enter role" required/>
                        </Form.Group>
                        <Button type="submit">Add employee</Button>
                    </Form>
                </Container>
            </Alert>
        </div>
    )

    
}
export default EmployeeForm;