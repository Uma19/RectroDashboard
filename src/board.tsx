import * as React from 'react';
import DashboardSection from './section/section';

class Board extends React.Component {
    render() {
        return (
            <div>
                <span> Rectrospective board </span>
                <DashboardSection />
            </div>
        );
    }
}

export default Board;