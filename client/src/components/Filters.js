import {Col, ListGroup} from 'react-bootstrap/';

/* get the list of labels to show, the one that is selected and the handler to notify a new selection */
const Filters = (props) => {
  const {filter, onSelect} = props;

  // ** FILTER DEFINITIONS **
  const items = {
    'all': { label: 'All', id: 'all' },
    'important': { label: 'Important', id: 'important' },
    'today': { label: 'Today', id: 'today' },
    'nextweek': { label: 'Next 7 Days', id: 'nextweek' },
    'private': { label: 'Private', id: 'private' },
  };

  // if filter is not know apply "all"
  const activeFilter = (filter && filter in items) ? filter : 'all';

  return (
    <Col bg="light" className="d-block col-3" id="left-sidebar">
      <ListGroup as="div" variant="flush" defaultActiveKey={activeFilter} >
          {
            Object.entries(items).map(([key, { label }]) => {
              return (
                <ListGroup.Item as="a" key={key} action active={key === activeFilter} onClick={() => onSelect(key)}>{label}</ListGroup.Item>
              );
            })
          }
      </ListGroup>
    </Col>
  )
}

export default Filters;
