import { FC, Fragment } from 'react';
import { Row } from 'react-bootstrap';
import PageHeader from '../../../layouts/layoutcomponents/pageheader';
import { UserList } from '../../../commondata/datauserlist';

interface UserlistProps { }

const Userlist: FC<UserlistProps> = () => (
  <Fragment>
    <PageHeader titles="User Lists" active="User List" items={['Apps']} /> 
    <Row className="row-cards">
              <UserList/>
    </Row>
  </Fragment>
);

export default Userlist;
