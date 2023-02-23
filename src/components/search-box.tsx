import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function SearchBox() {
    return(
    <>
        <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups ">
            <InputGroup>
            <InputGroup.Text id="btnGroupAddon">@</InputGroup.Text>
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