
import dayjs from 'dayjs';
import isYesterday from 'dayjs/plugin/isYesterday';
import isTomorrow from 'dayjs/plugin/isTomorrow';
import isToday from 'dayjs/plugin/isToday';

import { Form, ListGroup, Button } from 'react-bootstrap/';
import { PersonSquare, PencilSquare, Trash } from 'react-bootstrap-icons';

dayjs.extend(isYesterday).extend(isToday).extend(isTomorrow);


const formatDeadline = (d) => {
  if (!d) return '--o--';
  else if (d.isToday()) {
    return d.format('[Today at] HH:mm');
  } else if (d.isTomorrow()) {
    return d.format('[Tomorrow at] HH:mm');
  } else if (d.isYesterday()) {
    return d.format('[Yesterday at] HH:mm');
  } else {
    return d.format('dddd DD MMMM YYYY [at] HH:mm');
  }
}

const TaskRowData = (props) => {
  const { task, onCheck } = props;
  const labelClassName = `${task.important ? 'important' : ''} ${task.completed ? 'completed' : ''}`;

  return (
    <>
      <div className="flex-fill m-auto col text-break">
        <Form.Group className="m-0" controlId={`check-${task.id || ''}`}>
          <Form.Check type="checkbox">
            <Form.Check.Input type="checkbox" defaultChecked={task.completed} onChange={ (ev) => onCheck(ev.target.checked)} />
            <Form.Check.Label className={labelClassName} >{task.description}</Form.Check.Label>
          </Form.Check>
        </Form.Group></div>
      <div className="flex-fill mx-2 m-auto col-auto"><PersonSquare className={task.private ? 'invisible' : ''} /></div>
      <div className="flex-fill m-auto col"><small>{formatDeadline(task.deadline)}</small></div>
    </>
  )
}

const TaskRowControl = (props) => {
  const { onDelete, onEdit } = props;
  return (
    <>
      <Button variant="link" className="shadow-none col-auto" onClick={onEdit}><PencilSquare /></Button>
      <Button variant="link" className="shadow-none col-auto" onClick={onDelete}><Trash /></Button>
    </>
  )
}


const ContentList = (props) => {
  const { tasks, onDelete, onEdit, onCheck } = props;

  return (
    <>
      <ListGroup as="ul" variant="flush">
        {
          tasks.map(t => {
            return (
              <ListGroup.Item as="li" key={t.id} className="d-flex w-100 justify-content-between">
                  <TaskRowData task={t} onCheck={ (flag) => onCheck(t, flag)} />
                  <TaskRowControl task={t} onDelete={() => onDelete(t)} onEdit={() => onEdit(t)} />
              </ListGroup.Item>
            );
          })
        }
      </ListGroup>
    </>
  )
}

export default ContentList;