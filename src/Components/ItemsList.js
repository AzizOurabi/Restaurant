import React from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ItemsList = ({ data }) => {
  return (
    <Row>
      {data.length > 0 ? (
        <TransitionGroup className="d-flex flex-wrap">
          {data.map(item => (
            <CSSTransition key={item.id} timeout={300} classNames="item-fade">
              <Col sm='12' md='4' className='mb-3'>
                <Card className='d-flex flex-row' style={{ backgroundColor: '#F8F8F8' }}>
                  <Card.Img className='img-item' variant="top" src={`${process.env.PUBLIC_URL}/images/${item.img}`} />
                  <Card.Body>
                    <Card.Title className='d-flex justify-content-between'>
                      <div className='item-title'>
                        {item.title}
                      </div>
                      <div className='item-price'>
                        {item.price}
                      </div>
                    </Card.Title>
                    <Card.Text className='py-2'>
                      <div className='item-description'>
                        {item.description}
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </CSSTransition>
          ))}
        </TransitionGroup>
      ) : (
        <Col sm='12'>
          <h2 className='text-center'>No data</h2>
        </Col>
      )}
    </Row>
  );
};

export default ItemsList;