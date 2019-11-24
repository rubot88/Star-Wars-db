import React from 'react';
import { withRouter } from 'react-router-dom';
import Row from '../row';
import {
    PersonList,
    PersonDetails
} from '../sw-components';

const PeoplePage = ({ match, history }) => {
    const { id } = match.params;
    const personList = <PersonList onItemSelected={(id) => history.push(id)} />,
        personDetails = <PersonDetails itemId={id} />
    return (
        <Row left={personList} right={personDetails} />

    );
}

export default withRouter(PeoplePage);