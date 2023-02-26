import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { faHouse, faBoxArchive, faUser } from '@fortawesome/free-solid-svg-icons';

function SearchBox() {
    return(
    <>
        <ButtonToolbar className="mb-3 flex justify-center" aria-label="Toolbar with Button groups ">
            <InputGroup>
            {/* <InputGroup.Text id="btnGroupAddon">     
            </InputGroup.Text> */}
            <InputGroup.Text id="btnGroupAddon">
                <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
            </InputGroup.Text>
            <Form.Control
                type="text"
                placeholder="Tìm Kiếm"
                aria-label="Input group example"
                aria-describedby="btnGroupAddon"
                
            />
            </InputGroup>
        </ButtonToolbar>
    </>
    )

}

export default SearchBox