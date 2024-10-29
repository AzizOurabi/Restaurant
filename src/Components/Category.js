import React from 'react'
import { Row , Col} from 'react-bootstrap'

const Category = ({filterbyCategory,allCategory}) => {
  const onFilter = (cat) =>{
    filterbyCategory(cat)
  }
  return (
    <div>
       <Row className="my-2 mb-5">
            <Col className="d-flex justify-content-center">
                    {
                        allCategory.length >= 1 ? (allCategory.map((cat) => {
                            return (
                                <div key={cat}>
                                    <button onClick={() => onFilter(cat)} style={{ border: "1px solid #007BFF" }} className="btn mx-2">{cat}</button>
                                </div>
                            )
                        })) : <h4>No data</h4>
                    }
            </Col>
        </Row>
    </div>
  )
}

export default Category
