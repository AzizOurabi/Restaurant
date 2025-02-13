import React from 'react'
import { Row ,Col} from 'react-bootstrap'
const Header = () => {
  return (
    <div>
        <Row>
            <Col sm="12" className="justify-content-center text-center">
                <div className="title">Menu</div>
                <div className="justify-content-center d-flex">
                    <p className="underline"></p>
                </div>
            </Col>
        </Row>
    </div>
  )
}

export default Header
