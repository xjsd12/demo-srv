import React from 'react';
class Message extends React.Component<{
    message: string;
}> {
    public render() {
        return <div>{this.props.message}</div>;
    }
}

const App = () => <Message message="点击"/>;

export default App;